"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UserController = void 0;
var common_1 = require("@nestjs/common");
var validation_pipe_1 = require("../shared/validation.pipe");
var auth_guard_1 = require("./../shared/auth.guard");
var user_decorator_1 = require("./user.decorator");
var UserController = /** @class */ (function () {
    function UserController(userSerice) {
        this.userSerice = userSerice;
        this.logger = new common_1.Logger('UserController');
    }
    UserController.prototype.showAllUsers = function (user) {
        console.log(user);
        return this.userSerice.showAll();
    };
    UserController.prototype.login = function (data) {
        this.logger.log(JSON.stringify({}));
        return this.userSerice.login(data);
    };
    UserController.prototype.register = function (data) {
        this.logger.log(JSON.stringify(data));
        return this.userSerice.register(data);
    };
    __decorate([
        common_1.Get('api/users'),
        common_1.UseGuards(new auth_guard_1.AuthGuard()),
        __param(0, user_decorator_1.User())
    ], UserController.prototype, "showAllUsers");
    __decorate([
        common_1.Post('auth/login'),
        common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
        __param(0, common_1.Body())
    ], UserController.prototype, "login");
    __decorate([
        common_1.Post('auth/register'),
        common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
        __param(0, common_1.Body())
    ], UserController.prototype, "register");
    UserController = __decorate([
        common_1.Controller()
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
