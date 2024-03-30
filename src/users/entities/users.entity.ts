import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Role } from "../../common/enums/rol.enum";




@Schema({
    timestamps:true
})



export class User {
   

    // _id: SC.Types.ObjectId;

    // @Prop({
    //     type: 'enum',
    //     default: Role.USER,
    //     enum: Role
    // })

    @Prop()
    role: string;

    @Prop({
        default: null
    }
    )
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
        select: false
    })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User)