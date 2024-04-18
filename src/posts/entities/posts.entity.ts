import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Category } from "src/categories/entities/categories.entity";
import { User } from "src/users/entities/users.entity";


@Schema({
    timestamps:true
})

export class Post extends Document{

    // @Prop({
    //     required: true,
    //     trim: true
    // })

    @Prop({
        type: Types.ObjectId,
        ref: Category.name,
    })
    idCategory: Category | Types.ObjectId;

    
            
    @Prop({
        type: Types.ObjectId, 
        ref: User.name,
    })//Relation

    idUser: User | Types.ObjectId; //New field
    


    @Prop({
        required: true,
        trim: true,
    })
    title: string;

    
    @Prop({
        required: true
    }
    )
    image:string;

    @Prop({
        required: true,
        trim: true,
    })
    content: string;


    @Prop({
        default: null
    })
    video: string;


}


export const PostSchema = SchemaFactory.createForClass(Post)
