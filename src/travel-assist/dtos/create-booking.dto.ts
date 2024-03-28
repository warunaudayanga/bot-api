import { IsNotEmpty } from "class-validator";

export class CreateBookingDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    location: string;

    @IsNotEmpty()
    vehicleType: string;
}
