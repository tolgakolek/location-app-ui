import { BaseModel } from './base.models';
import { Build } from './build.models';

export class Block extends BaseModel {
    id?: number;
    gps: string;
    name: string;
    build?: Build;
}
