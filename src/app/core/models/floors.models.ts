import { BaseModel } from './base.models';

export class Floors extends BaseModel{
    floor_id?:number;
    name:string;
    map:string;
    other:string;
    block_id?:number;
    build_id?:number;
}