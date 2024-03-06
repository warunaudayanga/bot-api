import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { HichchiCrudModule } from "hichchi-nestjs-crud";
import { typeOrmOptions } from "./core/config/typeorm-options";

@Module({
    imports: [HichchiCrudModule.forRoot(typeOrmOptions), UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
