import { BadRequestException, Injectable, NotFoundException, Session } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Post as Pt } from './entities/posts.entity';

import { UserActiveInterface } from 'src/common/interface/user-active.interface';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Pt.name)
        private ptModel: mongoose.Model<Pt>,
        // private userService: UsersService,
    ){}


    async findAll(): Promise<Pt[]> {
        const posts = await this.ptModel.find()
            .populate(['idUser', 'idCategory'])
            .exec();
        // const posts =  await this.ptModel.find();
        return posts;
    }


    async create(post:Pt, user: UserActiveInterface): Promise<Pt> {

        if(!post.title || post.title.length < 4){
            throw new BadRequestException('El titulo no puede estar vacio')
        }

        if(!post.idCategory){
            throw new BadRequestException('Debes elegir una Categoría')
        }

        if(!post.image || post.image.length < 6){
            throw new BadRequestException('Debes proporcionar una URL para la imagen de tu post')
        }

        if(!post.content || post.content.length < 10){
            throw new BadRequestException('El contenido del post no puede estar vacio ni contener menos de 10 caracteres')
        }

        if(!post.video || post.video.length < 6){
            throw new BadRequestException('Debes proporcionar una URL para el video relacionado')
        }
      
      
        const p = {
            idCategory: post.idCategory,
            idUser: post.idUser,
            // idUser: user.id, 
            title: post.title,
            image: post.image,
            content: post.content,
            video: post.video
        }
    
        const res = await this.ptModel.create(p);
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

    async findAllByCategory(idCategory: string): Promise<Pt[]> {
        return await this.ptModel.find({idCategory})
            .populate(['idUser', 'idCategory'])
            .exec();
    }


    async findByCategoryId(idCategory: string) {
        const post = await this.ptModel.findOne({idCategory})
            .populate(['idUser', 'idCategory'])
            .exec();
        return post;
    }


    async findByUserId(idUser: string): Promise<Pt[]> {
        return await this.ptModel.find({idUser})
            .populate(['idUser', 'idCategory'])
            .exec();
        
    }

    // async findByUserName(userName: string){
    //     const userN = await this.userModel.findOne({userName})
    //     // console.log(userN);
    //     return userN;
    //    }



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
