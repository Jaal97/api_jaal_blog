import { Transform } from "class-transformer";
import {IsNotEmpty, IsString, MinLength} from "class-validator";
import { Role } from "src/common/enums/rol.enum";

export class RegisterDTO {
   
    @IsString()
    role: Role;

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