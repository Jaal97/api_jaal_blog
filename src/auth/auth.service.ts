import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDTO } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {

    }

    async register({ role, image, userName, password }: RegisterDTO) {

        const user = await this.userService.findByUserName(userName);

        if (user) {
            throw new BadRequestException('El usuario ya existe');
        }

        if (!userName || userName.length < 3) {
            throw new BadRequestException('El nombre del usuario no puede estar vacio ni contener menos de 4 caracteres');
        }

        if (!password || password.length < 3) {
            throw new BadRequestException('La contraseña no puede estar vacia ni contener menos de 4 caracteres');
        }

        await this.userService.create({
            role,
            image,
            userName,
            password: await bcryptjs.hash(password, 10)

        });

        return {
            role,
            image,
            userName
        }
    }


    async login({ userName, password }: LoginDTO) {
        const user = await this.userService.findByUserNameWithPassword(userName);

        if (!user) {
            throw new UnauthorizedException('El nombre de usuario es incorrecto');
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('La contraseña es incorrecta');
        }


        const payload = { id: user.id, userName: user.userName, role: user.role, image: user.image};


        const token = await this.jwtService.signAsync(payload)
        const image = user.image;
        const id = user.id;
        // const image = payload.sub;
        // console.log(payload);
        // console.log(user);
        return {
            token,
            id,
            userName,
            image
        }
    }

    async profile({ userName, role }: { userName: string, role: string }) {
        // console.log(userName);
        // console.log(isAdmin);
        // if(role !== 'admin'){
        //     throw new UnauthorizedException('No tienes permisos para acceder')
        // }
        return await this.userService.findByUserName(userName);
        // return {userName, image}
    }
}
