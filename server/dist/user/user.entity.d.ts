import { UserRO } from './user.dto';
export declare class UserEntity {
    id: string;
    created: Date;
    username: string;
    password: string;
    hashPassword(): Promise<void>;
    comparePassword(attempt: string): Promise<boolean>;
    toResponseObject(showToken?: boolean): UserRO;
    private get token();
}
