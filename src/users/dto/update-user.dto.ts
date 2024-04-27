import { IsString, IsNotEmpty} from "class-validator"
import { Role } from "src/common/enums/rol.enum";


export class UpdateUserDto {

    @IsString()
    role: string;

    @IsString()
    image: string;

    @IsNotEmpty()
    aboutMe: string;

    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    password: string;
    
}