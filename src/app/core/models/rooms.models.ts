import { BaseModel } from './base.models';
import { RoomType } from './room_types.models';
import { Floors } from './floors.models';

export class Rooms extends BaseModel{
    id?:number;
    name:string;
    map:string;
    floor?:Floors;
    roomType?:RoomType;
}