
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from 'src/schemas/categories.schema';
import { CreateCategoryDTO } from 'src/dto/create-category.dto';
import { UpdateCategoryDTO } from 'src/dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private categoryService: CategoriesService) {}

    @Get()
    async getAllCategories(): Promise<Category[]> {
        return this.categoryService.findAll()
    }

    
    @Post()
    async createCategory(
        @Body()
        category: CreateCategoryDTO
    ): Promise<Category> {
        return this.categoryService.create(category)
    }


    @Get(':id')
    async getCategory(
        @Param('id')
        id: string
    ): Promise<Category> {
        return this.categoryService.findById(id)
    }


    @Put(':id')
    async updateCategory(
        @Param('id')
        id: string,
        @Body()
        category: UpdateCategoryDTO
    ): Promise<Category> {
        return this.categoryService.updateById(id, category);
    }


    @Delete(':id')
    async deleteCategory(
        @Param('id')
        id: string
    ): Promise<Category> {
        return this.categoryService.deleteById(id);
    }

}

