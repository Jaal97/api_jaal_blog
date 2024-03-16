import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Category } from 'src/schemas/categories.schema';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel(Category.name)
        private categoryModel: mongoose.Model<Category>
    ){}


    async findAll(): Promise<Category[]> {
        const categories =  await this.categoryModel.find();
        return categories;
    }

    async create(category:Category): Promise<Category> {
        const res = await this.categoryModel.create(category);
        return res;
    }

    // async create(user:User): Promise<User> {
    //     const res = await this.userModel.create(user);
    //     return res;
    // }

    async findById(id: String): Promise<Category> {
        const category = await this.categoryModel.findById(id);

        if(!category){
            throw new NotFoundException('Categoria no encontrada ');
        }


        return category;
    }

    async updateById(id: String, category: Category): Promise<Category> {
        return await this.categoryModel.findByIdAndUpdate(id, category, {
            new: true,
            runValidators: true,
        });
    }


    async deleteById(id: String): Promise<Category> {
        return await this.categoryModel.findByIdAndDelete(id);
    }
}
