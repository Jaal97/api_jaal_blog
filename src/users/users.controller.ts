import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/schemas/users.schema';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.findAll()
    }

    
    @Post()
    async createUser(
        @Body()
        user: CreateUserDTO
    ): Promise<User> {
        return this.userService.create(user)
    }


    @Get(':id')
    async getUser(
        @Param('id')
        id: string
    ): Promise<User> {
        return this.userService.findById(id)
    }


    @Put(':id')
    async updateUser(
        @Param('id')
        id: string,
        @Body()
        user: UpdateUserDto
    ): Promise<User> {
        return this.userService.updateById(id, user);
    }


    @Delete(':id')
    async deleteUser(
        @Param('id')
        id: string
    ): Promise<User> {
        return this.userService.deleteById(id);
    }

}
