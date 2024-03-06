import { BaseRepository, GetManyOptions, GetOneOptions } from "hichchi-nestjs-crud";
import { UserEntity } from "../entities/user.entity";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { InjectRepository } from "@nestjs/typeorm/dist/common/typeorm.decorators";
import { Repository } from "typeorm/repository/Repository";
import { EntityManager } from "typeorm";

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
    constructor(@InjectRepository(UserEntity) protected readonly userRepository: Repository<UserEntity>) {
        super(userRepository);
    }

    getMany(getMany?: GetManyOptions<UserEntity>, manager?: EntityManager): Promise<[UserEntity[], number]> {
        getMany.relations = ["answers", "answers.quizCollection"];
        return super.getMany(getMany, manager);
    }

    getOne(getOne: GetOneOptions<UserEntity>, manager?: EntityManager): Promise<UserEntity | undefined> {
        getOne.relations = ["answers", "answers.quizCollection"];
        return super.getOne(getOne, manager);
    }
}
