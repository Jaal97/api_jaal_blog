import { IsString, IsNotEmpty, MinLength} from "class-validator"
// import { Role } from "src/common/enums/rol.enum";


export class CreateUserDTO {

    @IsString()
    role: string;

    @IsString()
    image: string;

    @IsNotEmpty()
    @MinLength(4)
    userName: string;
    
    @MinLength(4)
    @IsNotEmpty()
    password: string;
    
}
