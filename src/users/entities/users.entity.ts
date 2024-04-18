import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Role } from "../../common/enums/rol.enum";




@Schema({
    timestamps:true
})



export class User {
   
    @Prop({
        default: Role.USER
    })
    role: string;

    @Prop({
        default: null
    }
    )
    image: string;

    @Prop({
        minlength: 4,
        required: true,
        trim: true,
        unique: true
    })
    userName: string;

    @Prop({
        minlength: 4,
        required: true,
        trim: true,
        select: false
    })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User)