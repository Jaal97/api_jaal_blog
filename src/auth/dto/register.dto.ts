import { Transform } from "class-transformer";
import {IsNotEmpty, IsString, MinLength} from "class-validator";

export class RegisterDTO {
   
    @IsString()
    role: string;

    @IsNotEmpty()
    @IsString()
    image: string;

    @IsString()
    @MinLength(4)
    userName: string;

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(4)
    password: string;
}