import { IsOptional } from "class-validator";

export class UpdateBookingDto {
    @IsOptional()
    name?: string;

    @IsOptional()
    phone?: string;

    @IsOptional()
    location?: string;

    @IsOptional()
    vehicleType?: string;
}
