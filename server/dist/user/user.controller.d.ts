import { Logger } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userSerice;
    logger: Logger;
    constructor(userSerice: UserService);
    showAllUsers(user: any): Promise<import("./user.dto").UserRO[]>;
    login(data: UserDTO): Promise<import("./user.dto").UserRO>;
    register(data: UserDTO): Promise<import("./user.dto").UserRO>;
}
