import { BaseModel } from './base.models';

export class UserRole extends BaseModel{
    user_role_id?:number;
    name:string;
    description:string;
}