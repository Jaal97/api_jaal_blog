import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
// import { AuthGuard } from './guard/auth.guard';
import { Request as Rq } from 'express';
// import { Roles } from './decorators/roles.decorator';
// import { RolesGuard } from './guard/roles.guard';
import { Role } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { User } from 'src/schemas/users.schema';
import { UserActiveInterface } from 'src/common/interface/user-active.interface';
// import { Request } from 'express';

// interface RequestWithUser extends Rq{
//     user: {
//         userName: string; 
//         role: string;
//     }
// }

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
    @Auth(Role.USER)
    profile(
        @ActiveUser() user: UserActiveInterface
        // @Request() req:RequestWithUser,
        
    ){
        return this.authService.profile(user)
    }


}
