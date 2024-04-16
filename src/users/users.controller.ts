import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/users.entity'
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
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

    // @Get('')
    // async getUserByUserName(
    //     @Body()
    //     user: CreateUserDTO
    // ): Promise<User> {
    //     return this.userService.findByUserName(user);
    // }


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
