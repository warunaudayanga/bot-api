import { CrudService, IPagination } from "hichchi-nestjs-crud";
import { UserEntity } from "../entities/user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IUserService } from "hichchi-nestjs-auth";
import { UserRepository } from "../repositories/user.repository";
import { ISort } from "hichchi-nestjs-crud/types/sort.type";
import { IPaginatedResponse, IUserEntity } from "hichchi-nestjs-common/interfaces";
import { UserRole } from "../enums/user-role.enum";

@Injectable()
export class UserService extends CrudService<UserEntity> implements IUserService {
    constructor(@InjectRepository(UserRepository) protected readonly userRepository: UserRepository) {
        super(userRepository, "user");
    }

    async createUser(registerUserDto: Partial<UserEntity>): Promise<UserEntity> {
        return await this.save(registerUserDto);
    }

    async updateUserById(id: string, userDto: Partial<UserEntity>): Promise<UserEntity> {
        return await this.update(id, userDto);
    }

    async getUserById(id: string): Promise<UserEntity | undefined> {
        return await this.get(id);
    }

    async getUserByUsername(username: string): Promise<UserEntity | undefined> {
        return await this.getOne({ where: { username } });
    }

    async getAllStudents(
        filters: Partial<UserEntity>,
        sort: ISort<IUserEntity>,
        pagination: IPagination,
    ): Promise<IPaginatedResponse<UserEntity>> {
        filters.role = UserRole.STUDENT;
        return await this.getMany({ filters, sort, pagination });
    }

    async getStudentById(id: string) {
        const role = UserRole.STUDENT;
        return await this.getOne({ where: { id, role } });
    }
}
