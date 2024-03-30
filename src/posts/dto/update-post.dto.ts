import { IsString, IsNotEmpty, IsMongoId} from "class-validator"
// import * as mongoose from "mongoose";
import { Document, ObjectId, Types } from "mongoose";

export class UpdatePostDTO extends Document<Types.ObjectId>{

  
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