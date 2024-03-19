import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps:true
})



export class User {
    @Prop({
        required: true,
        trim: true
    })

    @Prop({
        default: false
    })
    isAdmin: boolean;

    @Prop()
    image: string;

    @Prop({
        required: true,
        trim: true,
        unique: true
    })
    userName: string;

    @Prop({
        required: true,
        trim: true,
    })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User)