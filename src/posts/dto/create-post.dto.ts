import { IsString, IsNotEmpty} from "class-validator"
// import * as mongoose from "mongoose";


export class CreatePostDTO {

  

    
    // idCategory: mongoose.Schema.Types.ObjectId;



    
    // idUser: mongoose.Types.ObjectId;


    
    @IsNotEmpty()
    @IsString()
    title: string;

    
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsString()
    content: string;


    @IsString()
    video: string;
    
}