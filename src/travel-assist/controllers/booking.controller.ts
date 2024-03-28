import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { BookingService } from "../services/booking.service";
import { CreateBookingDto } from "../dtos/create-booking.dto";
import { UpdateBookingDto } from "../dtos/update-booking.dto";

@Controller("booking")
export class BookingController {
    constructor(private readonly bookingService: BookingService) {}

    @Get(":botId")
    async getBookings(@Param("botId") botId: string) {
        return await this.bookingService.getMany({ where: { botId } });
    }

    @Get(":botId/:id")
    async getBookingById(@Param("botId") botId: string, @Param("id") id: string) {
        return await this.bookingService.getOne({ where: { botId, id } });
    }

    @Post(":botId")
    async createBooking(@Param("botId") botId: string, @Body() createBookingDto: CreateBookingDto) {
        return await this.bookingService.save({ ...createBookingDto, botId });
    }

    @Patch(":botId/:id")
    async updateBooking(
        @Param("botId") botId: string,
        @Param("id") id: string,
        @Body() updateBookingDto: UpdateBookingDto,
    ) {
        return await this.bookingService.updateBooking(botId, id, updateBookingDto);
    }

    @Delete(":botId/:id")
    async deleteBooking(@Param("botId") botId: string, @Param("id") id: string) {
        return await this.bookingService.deleteBooking(botId, id);
    }
}
