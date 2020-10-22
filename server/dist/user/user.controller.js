"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const validation_pipe_1 = require("../shared/validation.pipe");
const auth_guard_1 = require("./../shared/auth.guard");
const user_decorator_1 = require("./user.decorator");
const user_dto_1 = require("./user.dto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userSerice) {
        this.userSerice = userSerice;
        this.logger = new common_1.Logger('UserController');
    }
    showAllUsers(user) {
        console.log(user);
        return this.userSerice.showAll();
    }
    login(data) {
        this.logger.log(JSON.stringify({}));
        return this.userSerice.login(data);
    }
    register(data) {
        this.logger.log(JSON.stringify(data));
        return this.userSerice.register(data);
    }
};
__decorate([
    common_1.Get('api/users'),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "showAllUsers", null);
__decorate([
    common_1.Post('auth/login'),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDTO]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "login", null);
__decorate([
    common_1.Post('auth/register'),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDTO]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "register", null);
UserController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map