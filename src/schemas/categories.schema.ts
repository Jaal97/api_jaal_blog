import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as SC } from "mongoose";


@Schema({
    timestamps:true
})



export class Category {
    
    // _id: SC.Types.ObjectId;


    @Prop({
        required: true,
        trim: true,
    })
    name: string;

    
    @Prop({
        required: true,
        trim: true,
    })
    description: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category)