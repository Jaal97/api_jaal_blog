import { IsString, IsNotEmpty} from "class-validator"
import { Document } from "mongoose";


export class CreateCategoryDTO extends Document{


    @IsString()
    @IsNotEmpty()
    name: string;

    
    @IsNotEmpty()
    description: string;
    
}