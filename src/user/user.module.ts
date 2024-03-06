import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user.controller";
import { UserService } from "./services/user.service";
import { UserRepository } from "./repositories/user.repository";
import { HichchiCrudModule } from "hichchi-nestjs-crud";
import { UserEntity } from "./entities/user.entity";

@Module({
    imports: [HichchiCrudModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserRepository, UserService],
})
export class UserModule {}
