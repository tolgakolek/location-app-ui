import { BaseModel } from './base.models';

export class Rooms extends BaseModel{
    room_id?:number;
    name:string;
    map:string;
    floor_id?:number;
    room_type_id?:number;
}