import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { BookingService } from "../services/booking.service";
import { CreateBookingDto } from "../dtos/create-booking.dto";
import { UpdateBookingDto } from "../dtos/update-booking.dto";

@Controller("booking")
export class BookingController {
    constructor(private readonly bookingService: BookingService) {}

    @Get(":botId")
    @HttpCode(HttpStatus.OK)
    async getBookings(@Param("botId") botId: string) {
        return await this.bookingService.getMany({ where: { botId } });
    }

    @Get(":botId/:phone")
    @HttpCode(HttpStatus.OK)
    async getBookingById(@Param("botId") botId: string, @Param("phone") phone: string) {
        return await this.bookingService.getOne({ where: { botId, phone } });
    }

    @Post(":botId")
    @HttpCode(HttpStatus.OK)
    async createBooking(@Param("botId") botId: string, @Body() createBookingDto: CreateBookingDto) {
        return await this.bookingService.save({ ...createBookingDto, botId });
    }

    @Patch(":botId/:phone")
    @HttpCode(HttpStatus.OK)
    async updateBooking(
        @Param("botId") botId: string,
        @Param("phone") phone: string,
        @Body() updateBookingDto: UpdateBookingDto,
    ) {
        return await this.bookingService.updateBooking(botId, phone, updateBookingDto);
    }

    @Delete(":botId/:phone")
    @HttpCode(HttpStatus.OK)
    async deleteBooking(@Param("botId") botId: string, @Param("phone") phone: string) {
        return await this.bookingService.deleteBooking(botId, phone);
    }
}
