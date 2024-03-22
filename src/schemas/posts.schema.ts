import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import * as mongoose from "mongoose";
// import { User } from "./users.schema";
// import { Category } from "./categories.schema";


@Schema({
    timestamps:true
})

export class Post{

    // @Prop({
    //     required: true,
    //     trim: true
    // })

    // @Prop()
    // idCategory: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Category',
    // }
    
        
        
    // @Prop()
    // idUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'};


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
