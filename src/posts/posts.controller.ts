import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as Pt } from './entities/posts.entity';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDTO } from './dto/update-post.dto';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interface/user-active.interface';
// import { User } from 'src/users/entities/users.entity';

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
        post: CreatePostDTO,
        @ActiveUser() user: UserActiveInterface
    ): Promise<Pt> {
        return this.postService.create(post, user )
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
