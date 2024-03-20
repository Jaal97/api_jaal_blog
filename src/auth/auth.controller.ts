import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
// import { Request } from 'express';


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('register')
    register(
        @Body()
        registerDTO: RegisterDTO
    ){
        return this.authService.register(registerDTO);
    }

    @Post('login')
    login(
        @Body()
        loginDTO: LoginDTO
    ){
        return this.authService.login(loginDTO);
    }

    @Get('profile')
    @UseGuards(AuthGuard)
    profile(
        @Request() req,
        
    ){
        return req.user;
    }


}
