import { IsString, IsBoolean, IsOptional, IsNotEmpty} from "class-validator"


export class UpdateUserDto {

    @IsString()
    role: string;

    @IsString()
    image: string;

    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    password: string;
    
}