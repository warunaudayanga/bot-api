import { CrudService } from "hichchi-nestjs-crud";
import { UserEntity } from "../entities/user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "../repositories/user.repository";
import { IUserService } from "hichchi-nestjs-auth";
import { IUserEntity } from "hichchi-nestjs-common/interfaces";
import { RegisterUserDto } from "../dto/register-user.dto";

@Injectable()
export class UserService extends CrudService<UserEntity> implements IUserService {
    constructor(@InjectRepository(UserRepository) protected readonly userRepository: UserRepository) {
        super(userRepository, "user", "email");
    }

    createUser(userDto: RegisterUserDto): Promise<IUserEntity> {
        console.log(userDto);
        return super.save(userDto);
    }

    getUserById(id: string): Promise<IUserEntity | undefined> {
        return super.get(id);
    }

    getUserByEmail(email: string): Promise<IUserEntity | undefined> {
        return super.getOne({ where: { email } });
    }

    updateUserById(id: string, userDto: Partial<IUserEntity>): Promise<IUserEntity> {
        return super.update(id, userDto);
    }
}
