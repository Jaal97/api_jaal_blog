import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDTO{

    @MinLength(4)
    @IsNotEmpty()
    userName: string;

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(4)
    password: string;
}