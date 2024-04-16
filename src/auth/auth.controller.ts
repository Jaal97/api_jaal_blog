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
//import { User } from 'src/users/entities/users.entity';
import { UserActiveInterface } from 'src/common/interface/user-active.interface';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';
// import { Request } from 'express';

// interface RequestWithUser extends Rq{
//     user: {
//         userName: string; 
//         role: string;
//     }
// }
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
