import { BaseModel } from './base.models';
import { DeviceTypes } from './device_types.models';

export class Devices extends BaseModel{
    id?:number;
    deviceType?:DeviceTypes;
    name:string;
    properties:string;
    technology:string;
}