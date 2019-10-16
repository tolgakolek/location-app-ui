import { BaseModel } from './base.models';
import { DeviceTypes } from './device_types.models';
import { Rooms } from './rooms.models';

export class Devices extends BaseModel {
    id?: number;
    deviceType?: DeviceTypes;
    name: string;
    properties: string;
    technology: string;
    locationX: string;
    locationY: string;
    macAddress: string;
    room?: Rooms;
}