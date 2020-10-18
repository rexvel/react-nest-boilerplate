import { Body, Controller, Get, Logger, Post, UseGuards, UsePipes } from '@nestjs/common';
import { ValidationPipe } from '../shared/validation.pipe';
import { AuthGuard } from './../shared/auth.guard';
import { User } from './user.decorator';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';


@Controller()
export class UserController {
    logger = new Logger('UserController');

    constructor(private userSerice: UserService) { }

    @Get('api/users')
    @UseGuards(new AuthGuard())
    showAllUsers(@User() user) {
        console.log(user)
        return this.userSerice.showAll();
    }

    @Post('auth/login')
    @UsePipes(new ValidationPipe())
    login(@Body() data: UserDTO) {
        this.logger.log(JSON.stringify({}));
        return this.userSerice.login(data);
    }

    @Post('auth/register')
    @UsePipes(new ValidationPipe())
    register(@Body() data: UserDTO) {
        this.logger.log(JSON.stringify(data));
        return this.userSerice.register(data);
    }
}