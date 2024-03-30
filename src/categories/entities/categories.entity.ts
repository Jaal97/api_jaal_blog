import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({
    timestamps:true
})



export class Category extends Document{
    
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