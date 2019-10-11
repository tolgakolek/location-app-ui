import { BaseModel } from './base.models';
import { Campus } from './campus.models';
import { Sites } from './sites.models';

export class Build extends BaseModel{
    id?:number;
    address: string;
    gps: string;
    name: string;
    campus?:Campus;
    site?:Sites;
    properties: string;
    campus_id?: number;
    site_id?:number;
}