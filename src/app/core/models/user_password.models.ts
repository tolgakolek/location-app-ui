import { BaseModel } from './base.models';

export class UserPassword extends BaseModel{
    user_password_id?:number;
    password:string;
}