import { BaseModel } from './base.models';
import { UserTitle } from './user_title.models';
import { Department } from './department.models';
import { UserRole } from './user_role.models';

export class User extends BaseModel{
    id?:number;
    name:string;
    email:string;
    gender:number;
    nationId?:number;
    password:string;
    state?:boolean;
    surname:string;
    success?:boolean;
    department?:Department[];
    userrole?:UserRole[];
    userTitle?:UserTitle;
}