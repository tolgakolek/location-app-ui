import { BaseModel } from './base.models';
import { Block } from './block.models';
import { Build } from './build.models';

export class Floors extends BaseModel{
    id?:number;
    name:string;
    map:string;
    other:string;
    block?:Block;
    build?:Build;
}