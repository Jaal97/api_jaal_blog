
import { IsString, IsNotEmpty, IsMongoId} from "class-validator"
// import * as mongoose from "mongoose";
import mongoose, { Document} from "mongoose";


export class CreatePostDTO extends Document{


    @IsMongoId()    
    idCategory: any;

    
    @IsMongoId()
    idUser: any;

    
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