import { Injectable } from "@nestjs/common";
import { BookingRepository } from "../repositories/booking.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { CrudService } from "hichchi-nestjs-crud";
import { BookingEntity } from "../entities/booking.entity";
import { UpdateBookingDto } from "../dtos/update-booking.dto";
import { IStatusResponse } from "hichchi-nestjs-common/interfaces";

@Injectable()
export class BookingService extends CrudService<BookingEntity> {
    constructor(@InjectRepository(BookingRepository) protected readonly bookingRepository: BookingRepository) {
        super(bookingRepository, "booking");
    }

    async updateBooking(botId: string, id: string, updateBookingDto: UpdateBookingDto): Promise<IStatusResponse> {
        if (await this.getOne({ where: { botId, id } })) return await this.updateOne({ botId, id }, updateBookingDto);
    }

    async deleteBooking(botId: string, id: string) {
        if (await this.getOne({ where: { botId, id } })) return await this.delete(id);
    }
}
