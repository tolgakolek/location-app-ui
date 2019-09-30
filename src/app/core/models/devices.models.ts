import { BaseModel } from './base.models';

export class Devices extends BaseModel{
    device_id?:number;
    device_type_id?:number;
    name:string;
    properties:string;
    technology:string;
}