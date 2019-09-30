import { BaseModel } from './base.models';

export class DeviceRooms extends BaseModel{
    device_room_id?:number;
    device_id:number;
    locationx:number;
    locationy:number;
    room_id?:number;
}