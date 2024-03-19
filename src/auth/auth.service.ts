import {Injectable, BadRequestException, UnauthorizedException} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDTO } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDTO } from './dto/login.dto';


@Injectable()
export class AuthService {

    constructor(private userService: UsersService) {

    }

    async register({isAdmin, image, userName, password}: RegisterDTO){

    const user = await this.userService.findByUserName(userName);

    if(user){
    throw new BadRequestException('El usuario ya existe');
    }

    return await this.userService.create({
        isAdmin,
        image,
        userName,
        password: await bcryptjs.hash(password, 10)

    });
      
    }

    
    async login({userName, password}: LoginDTO){
        const user = await this.userService.findByUserName(userName);

        if(!user){
            throw new UnauthorizedException('El nombre de usuario es incorrecto');
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);
        
        if(!isPasswordValid){
            throw new UnauthorizedException('La contraseña es incorrecta');
        }

        return 'Sesion iniciada con exito'
    }
}
