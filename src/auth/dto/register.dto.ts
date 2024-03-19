import { Transform } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsString, MinLength} from "class-validator";

export class RegisterDTO {
   
    @IsBoolean()
    isAdmin: boolean;

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