import { BaseModel } from './base.models';

export class User extends BaseModel{
    user_id?:number;
    name:string;
    email:string;
    gender:number;
    nation_id?:number;
    password:string;
    state:boolean;
    surname:string;
    user_title_id?:number;
}