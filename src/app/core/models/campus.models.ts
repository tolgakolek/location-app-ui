import { BaseModel } from './base.models';

export class Campus extends BaseModel{
    id?:number;
    name: string;
    campusSites?: Array<any>;
}