import { BaseModel } from './base.models';

export class Department extends BaseModel{
    department_id?:number;
    name: string;
    description: string;
    other:string;
}