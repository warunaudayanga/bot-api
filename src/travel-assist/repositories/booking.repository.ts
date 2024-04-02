import { BaseRepository } from "hichchi-nestjs-crud";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { InjectRepository } from "@nestjs/typeorm/dist/common/typeorm.decorators";
import { Repository } from "typeorm/repository/Repository";
import { BookingEntity } from "../entities/booking.entity";
import { DeepPartial, EntityManager, SaveOptions } from 'typeorm';

@Injectable()
export class BookingRepository extends BaseRepository<BookingEntity> {
    constructor(@InjectRepository(BookingEntity) protected readonly bookingRepository: Repository<BookingEntity>) {
        super(bookingRepository);
    }

    async save<T extends DeepPartial<BookingEntity>>(entity: T, options?: SaveOptions, manager?: EntityManager): Promise<T & BookingEntity> {
        return this.transaction(async (entityManager) => {
            await entityManager.delete(BookingEntity, { botId: entity.botId, phone: entity.phone });
            return entityManager.save(BookingEntity, entity, options);
        });
    }
}
