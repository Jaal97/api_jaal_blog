import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { User } from 'src/schemas/users.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ){}


    async findAll(): Promise<User[]> {
        const users =  await this.userModel.find();
        return users;
    }

    async create(user:User): Promise<User> {
        const res = await this.userModel.create(user);
        return res;
    }

    async findById(id: String): Promise<User> {
        const user = await this.userModel.findById(id);

        if(!user){
            throw new NotFoundException('Usuario no encontrado ');
        }


        return user;
    }
    

   async findByUserName(userName: string){
    const userN = await this.userModel.findOne({userName})
    console.log(userN);
    return userN;
   }


    async updateById(id: String, user: User): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, user, {
            new: true,
            runValidators: true,
        });
    }


    async deleteById(id: String): Promise<User> {
        return await this.userModel.findByIdAndDelete(id);
    }
}
