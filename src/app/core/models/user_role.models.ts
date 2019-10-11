import { BaseModel } from './base.models';

export class UserRole extends BaseModel {
    id?: number;
    name: string;
    description: string;
}