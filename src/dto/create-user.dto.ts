import { IsString, IsBoolean, IsOptional, IsNotEmpty} from "class-validator"


export class CreateUserDTO {

    @IsBoolean()
    isAdmin: boolean;

    @IsString()
    image: string;

    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    password: string;
    
}