import { BaseModel } from './base.models';

export class Block extends BaseModel {
    block_id?: number;
    gps: string;
    name: string;
    build_id?: number;
}
