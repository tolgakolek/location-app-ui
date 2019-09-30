import { BaseModel } from './base.models';

export class Build extends BaseModel{
    address: string;
    gps: string;
    name: string;
    properties: string;
    campus_id?: number;
    site_id?:number;
}