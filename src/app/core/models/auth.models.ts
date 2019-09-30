import { BaseModel } from './base.models';

export class User extends BaseModel {
    id: number;
    username?: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
    email: string;
}
