import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
import { Role } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';

import { UserActiveInterface } from 'src/common/interface/user-active.interface';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('register')
    @Post()
    @ApiCreatedResponse({description: 'Te has registrado'})
    @ApiForbiddenResponse({description: 'No te has podido registrar'})
    register(
        @Body()
        registerDTO: RegisterDTO
    ){
        return this.authService.register(registerDTO);
    }

    @Post('login')
    @ApiCreatedResponse({description: 'Te has loggeado'})
    @ApiForbiddenResponse({description: 'No te has podido loggear'})
    login(
        @Body()
        loginDTO: LoginDTO
    ){
        return this.authService.login(loginDTO);
    }


    @Get('profile')
    @Auth(Role.USER)
    profile(
        @ActiveUser() user: UserActiveInterface
        // @Request() req:RequestWithUser,
        
    ){
        return this.authService.profile(user)
    }
}
