import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as Pt } from './entities/posts.entity';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDTO } from './dto/update-post.dto';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interface/user-active.interface';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Posts')
@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {}

    @Get()
    async getAllPosts(): Promise<Pt[]> {
        return this.postService.findAll()
    }

    
    @Post()
    @ApiCreatedResponse({description: 'El Post fue creado'})
    @ApiForbiddenResponse({description: 'No se ha podido realizar la petición'})
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


    @Get('categories/:idCategory')
    async getPostCategories(
        @Param('idCategory')
        idCategory: string
    ): Promise<Pt[]>{
        return this.postService.findAllByCategory(idCategory)
    }


    @Get('category/:idCategory')
    async getPostCategory(
        @Param('idCategory')
        idCategory: string
    ): Promise<Pt>{
        return this.postService.findByCategoryId(idCategory)
    }


    @Get('user/:idUser')
    async getPostUser(
        @Param('idUser')
        idUser: string
    ): Promise<Pt>{
        return this.postService.findByUserId(idUser)
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

    @Auth(Role.ADMIN)
    @Delete(':id')
    async deletePost(
        @Param('id')
        id: string
    ): Promise<Pt> {
        return this.postService.deleteById(id);
    }
}
