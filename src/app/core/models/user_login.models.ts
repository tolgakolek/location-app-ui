import { BaseModel } from './base.models';

export class UserLogin extends BaseModel{
    user_login_id?:number;
    ip_address:string;
    login_password:string;
    user_id?:number;
}