import { BaseRepository } from "hichchi-nestjs-crud";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { InjectRepository } from "@nestjs/typeorm/dist/common/typeorm.decorators";
import { Repository } from "typeorm/repository/Repository";
import { BookingEntity } from "../entities/booking.entity";

@Injectable()
export class BookingRepository extends BaseRepository<BookingEntity> {
    constructor(@InjectRepository(BookingEntity) protected readonly bookingRepository: Repository<BookingEntity>) {
        super(bookingRepository);
    }
}
