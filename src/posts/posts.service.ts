import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Post as Pt } from './entities/posts.entity';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Pt.name)
        private ptModel: mongoose.Model<Pt>
    ){}


    async findAll(): Promise<Pt[]> {
        return await this.ptModel.find()
            .populate(['idUser', 'idCategory'])
            .exec();
        // const posts =  await this.ptModel.find();
        // return posts;
    }


    async create(post:Pt): Promise<Pt> {
        const res = await this.ptModel.create(post);
        return res;
    }


    async findById(id: String): Promise<Pt> {
        const post = await this.ptModel.findById(id)
            .populate(['idUser', 'idCategory'])
            .exec();

        if(!post){
            throw new NotFoundException('Post no encontrado ');
        }
        return post;
    }



    async updateById(id: String, post: Pt): Promise<Pt> {
        return await this.ptModel.findByIdAndUpdate(id, post, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: String): Promise<Pt> {
        return await this.ptModel.findByIdAndDelete(id);
    }
}
