import { BaseRepository } from "hichchi-nestjs-crud";
import { UserEntity } from "../entities/user.entity";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { InjectRepository } from "@nestjs/typeorm/dist/common/typeorm.decorators";
import { Repository } from "typeorm/repository/Repository";

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
    constructor(@InjectRepository(UserEntity) protected readonly userRepository: Repository<UserEntity>) {
        super(userRepository);
    }
}
