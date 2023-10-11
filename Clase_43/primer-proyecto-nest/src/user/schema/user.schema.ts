import {Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";



export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
    @Prop({require:true})
    first_name: string;

    @Prop({require:true})
    last_name: string;

    @Prop({require:true, unique:true})
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User)