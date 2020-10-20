import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpErrorFilter } from './shared/http-error.filter';
import { LogginInterceptor } from './shared/loggin.interceptor';
import { UserModule } from './user/user.module';

@Module({
    imports: [TypeOrmModule.forRoot(), UserModule],
    controllers: [AppController],
    providers: [AppService, {
        provide: APP_FILTER,
        useClass: HttpErrorFilter
    }, {
            provide: APP_INTERCEPTOR,
            useClass: LogginInterceptor,
        }],
})
export class AppModule { }
