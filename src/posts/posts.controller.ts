import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as Pt } from 'src/schemas/posts.schema';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDTO } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {}

    @Get()
    async getAllPosts(): Promise<Pt[]> {
        return this.postService.findAll()
    }


    @Post()
    async createPost(
        @Body()
        post: CreatePostDTO
    ): Promise<Pt> {
        return this.postService.create(post)
    }


    @Get(':id')
    async getPost(
        @Param('id')
        id: string
    ): Promise<Pt> {
        return this.postService.findById(id)
    }


    @Put(':id')
    async updatePost(
        @Param('id')
        id: string,
        @Body()
        post: UpdatePostDTO
    ): Promise<Pt> {
        return this.postService.updateById(id, post);
    }


    @Delete(':id')
    async deletePost(
        @Param('id')
        id: string
    ): Promise<Pt> {
        return this.postService.deleteById(id);
    }

    
}
