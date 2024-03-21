import { IsString, IsBoolean, IsOptional, IsNotEmpty} from "class-validator"


export class CreateUserDTO {

    @IsString()
    role: string;

    @IsString()
    image: string;

    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    password: string;
    
}
