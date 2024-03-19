import { IsString, IsBoolean, IsOptional, IsNotEmpty} from "class-validator"


export class UpdateCategoryDTO {


    @IsString()
    @IsNotEmpty()
    name: string;

   

    @IsNotEmpty()
    description: string;
    
}