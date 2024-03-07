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
import { AuthField } from "hichchi-nestjs-auth/auth/enums/auth-by.enum";
import { join } from "path";
import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: configuration().smtp.host,
                port: configuration().smtp.port,
                secure: configuration().smtp.secure,
                ignoreTLS: configuration().smtp.ignoreTLS,
                auth: {
                    user: configuration().smtp.user,
                    pass: configuration().smtp.pass,
                },
            },
            defaults: {
                from: `"Bot" <${configuration().smtp.from}>`,
            },
            template: {
                dir: join(__dirname + "/modules/common/templates"),
                adapter: new HandlebarsAdapter(),
                options: {
                    strict: true,
                },
            },
            preview: true,
        }),
        HichchiCrudModule.forRoot(typeOrmOptions),
        HichchiAuthModule.registerAsync(
            { imports: [UserModule], useExisting: UserService },
            {
                jwt: configuration().jwt,
                redis: configuration().redis,
                registerDto: RegisterUserDto,
                authField: AuthField.EMAIL,
            },
        ),
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
