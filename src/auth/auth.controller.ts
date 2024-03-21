import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
// import { AuthGuard } from './guard/auth.guard';
import { Request as Rq } from 'express';
// import { Roles } from './decorators/roles.decorator';
// import { RolesGuard } from './guard/roles.guard';
import { Role } from './enums/rol.enum';
import { Auth } from './decorators/auth.decorator';
// import { Request } from 'express';

interface RequestWithUser extends Rq{
    user: {
        userName: string; 
        role: string;
    }
}

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

    // @Get('profile')
    // @Roles(Role.ADMIN) 
    // @UseGuards(AuthGuard, RolesGuard)
    // profile(
    //     @Request() req:RequestWithUser,
        
    // ){
    //     return this.authService.profile(req.user)
    // }


    @Get('profile')
    @Auth(Role.ADMIN)
    profile(
        @Request() req:RequestWithUser,
        
    ){
        return this.authService.profile(req.user)
    }


}
