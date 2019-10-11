import { BaseModel } from './base.models';
import { SubUnits } from './sub_units.models';

export class Department extends BaseModel{
    id?:number;
    name: string;
    subUnit?:SubUnits;
    description: string;
    other:string;
}