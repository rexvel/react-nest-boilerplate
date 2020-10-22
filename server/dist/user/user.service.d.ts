import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    showAll(): Promise<import("./user.dto").UserRO[]>;
    login(data: UserDTO): Promise<import("./user.dto").UserRO>;
    register(data: UserDTO): Promise<import("./user.dto").UserRO>;
}
