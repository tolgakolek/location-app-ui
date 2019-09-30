import { BaseModel } from './base.models';

export class Block extends BaseModel {
    block_id?: number;
    is_active: boolean;
    gps: string;
    name: string;
    build_id?: number;
}
