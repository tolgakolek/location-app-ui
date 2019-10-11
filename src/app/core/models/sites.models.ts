import { BaseModel } from './base.models';
import { Campus } from './campus.models';

export class Sites extends BaseModel{
    id?:number;
    name:string;
    description:string;
    campus?:Campus;
    gps:string;
}
export interface CampusSearchResult {
    tables: Sites[];
    total: number;
}
