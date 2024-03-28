import { Module } from "@nestjs/common";
import { BookingController } from "./controllers/booking.controller";
import { BookingService } from "./services/booking.service";
import { BookingRepository } from "./repositories/booking.repository";
import { HichchiCrudModule } from "hichchi-nestjs-crud";
import { BookingEntity } from "./entities/booking.entity";

@Module({
    imports: [HichchiCrudModule.forFeature([BookingEntity])],
    controllers: [BookingController],
    providers: [BookingService, BookingRepository],
})
export class TravelAssistModule {}
