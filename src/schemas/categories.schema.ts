import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps:true
})



export class Category {
    @Prop({
        required: true,
        trim: true
    })


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