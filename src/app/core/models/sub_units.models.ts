import { BaseModel } from './base.models';
import { MainUnits } from './main_units.models';

export class SubUnits extends BaseModel {
    id?: number;
    name: string;
    mainUnit?: MainUnits;
}