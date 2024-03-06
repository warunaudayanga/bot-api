import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { HichchiCrudModule } from "hichchi-nestjs-crud";
import { typeOrmOptions } from "./core/config/typeorm-options";
import { HichchiAuthModule } from "hichchi-nestjs-auth";
import configuration from "./core/config/configuration";
import { UserService } from "./user/services/user.service";
import { RegisterUserDto } from "./user/dto/register-user.dto";
import { AuthBy } from "hichchi-nestjs-auth/auth/enums/auth-by.enum";

@Module({
    imports: [
        HichchiCrudModule.forRoot(typeOrmOptions),
        HichchiAuthModule.registerAsync(
            {
                imports: [UserModule],
                useExisting: UserService,
            },
            {
                jwt: {
                    secret: configuration().jwt.secret,
                    expiresIn: configuration().jwt.expiresIn,
                    refreshSecret: configuration().jwt.refreshSecret,
                    refreshExpiresIn: configuration().jwt.refreshExpiresIn,
                },
                redis: {
                    ttl: configuration().redis.ttl,
                    host: configuration().redis.host,
                    port: configuration().redis.port,
                    auth_pass: configuration().redis.password,
                    prefix: configuration().redis.prefix,
                    url: configuration().redis.url,
                },
                registerDto: RegisterUserDto,
                authBy: AuthBy.EMAIL,
            },
        ),
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
