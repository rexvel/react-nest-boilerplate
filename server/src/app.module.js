"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var typeorm_1 = require("@nestjs/typeorm");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var http_error_filter_1 = require("./shared/http-error.filter");
var loggin_interceptor_1 = require("./shared/loggin.interceptor");
var user_module_1 = require("./user/user.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forRoot(), user_module_1.UserModule],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService, {
                    provide: core_1.APP_FILTER,
                    useClass: http_error_filter_1.HttpErrorFilter
                }, {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: loggin_interceptor_1.LogginInterceptor
                }]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
