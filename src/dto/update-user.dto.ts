import {IsString, IsBoolean, IsNotEmpty, IsOptional} from "class-validator";


export class UpdateUserDto{
    @IsBoolean()
    isAdmin: boolean;

    @IsString()
    image: string;

    @IsNotEmpty()
    userName: string;

    @IsOptional()
    password: string;
}