import { CrudService } from "hichchi-nestjs-crud";
import { UserEntity } from "../entities/user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class UserService extends CrudService<UserEntity> {
    constructor(@InjectRepository(UserRepository) protected readonly userRepository: UserRepository) {
        super(userRepository, "user", "email");
    }
}
