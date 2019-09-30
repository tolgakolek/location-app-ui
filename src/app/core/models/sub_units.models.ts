import { BaseModel } from './base.models';

export class SubUnits extends BaseModel{
    sub_unit_id?:number;
    name:string;
    main_unit_id?:number;
}