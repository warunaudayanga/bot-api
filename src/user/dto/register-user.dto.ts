import { IsNotEmpty, Matches } from "class-validator";
import configuration from "../../core/config/configuration";
import { toErrString } from "hichchi-nestjs-common/converters";
import { Errors } from "../../core/responses/error.responses";
import { RegisterDto } from "hichchi-nestjs-auth";

export class RegisterUserDto extends RegisterDto {
    @IsNotEmpty(toErrString(Errors.E_400_NOT_EMPTY_NAME))
    name: string;

    @Matches(configuration().regex.email, toErrString(Errors.E_400_INVALID_EMAIL))
    @IsNotEmpty(toErrString(Errors.E_400_NOT_EMPTY_EMAIL))
    email: string;

    @IsNotEmpty(toErrString(Errors.E_400_NOT_EMPTY_PASSWORD))
    password: string;

    @IsNotEmpty(toErrString(Errors.E_400_NOT_EMPTY_PHONE))
    phone: string;
}
