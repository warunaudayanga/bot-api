import { IsNotEmpty, IsOptional, Matches } from "class-validator";
import configuration from "../../core/config/configuration";
import { toErrString } from "hichchi-nestjs-common/converters";
import { SalesErrors } from "../responses/sales.error.responses";

export class SalesContactDto {
    @IsNotEmpty(toErrString(SalesErrors.SALES_400_NOT_EMPTY_NAME))
    name: string;

    @Matches(configuration().regex.email, toErrString(SalesErrors.SALES_400_INVALID_EMAIL))
    @IsNotEmpty(toErrString(SalesErrors.SALES_400_NOT_EMPTY_EMAIL))
    email: string;

    @IsOptional()
    organization: string;

    @IsNotEmpty(toErrString(SalesErrors.SALES_400_NOT_EMPTY_PHONE))
    phone: string;

    @IsOptional()
    message: string;
}
