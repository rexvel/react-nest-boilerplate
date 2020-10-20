"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LogginInterceptor = void 0;
var common_1 = require("@nestjs/common");
var operators_1 = require("rxjs/operators");
var LogginInterceptor = /** @class */ (function () {
    function LogginInterceptor() {
    }
    LogginInterceptor.prototype.intercept = function (context, next) {
        var req = context.switchToHttp().getRequest();
        var method = req.method;
        var url = req.url;
        var now = Date.now();
        return next
            .handle()
            .pipe(operators_1.tap(function () { return common_1.Logger.log(method + " " + url + " " + (Date.now() - now) + "ms", context.getClass().name); }));
    };
    LogginInterceptor = __decorate([
        common_1.Injectable()
    ], LogginInterceptor);
    return LogginInterceptor;
}());
exports.LogginInterceptor = LogginInterceptor;
