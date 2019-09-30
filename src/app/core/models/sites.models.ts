import { BaseModel } from './base.models';

export class Sites extends BaseModel{
    site_id?:number;
    name:string;
    description:string;
    gps:string;
}