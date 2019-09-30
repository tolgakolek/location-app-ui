import { BaseModel } from './base.models';

export class UserContact extends BaseModel{
    user_contact_id?:number;
    user_id?:number;
    user_contact_type_id?:number;
}