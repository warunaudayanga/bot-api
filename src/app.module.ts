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
import { SalesModule } from "./sales/sales.module";
import { EmailModule } from "./email/email.module";

@Module({
    imports: [
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
        SalesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
