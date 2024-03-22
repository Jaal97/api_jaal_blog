import { IsString, IsBoolean, IsOptional, IsNotEmpty} from "class-validator"
import { Role } from "src/common/enums/rol.enum";


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