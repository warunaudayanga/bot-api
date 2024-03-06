import { IsNotEmpty, Matches } from "class-validator";
import configuration from "../../core/config/configuration";
import { toErrString } from "hichchi-nestjs-common/converters";
import { Errors } from "../../core/responses/error.responses";

export class CreateUserDto {
    @IsNotEmpty(toErrString(Errors.E_400_NOT_EMPTY_NAME))
    name: string;

    @Matches(configuration().regex.email, toErrString(Errors.E_400_INVALID_EMAIL))
    @IsNotEmpty(toErrString(Errors.E_400_NOT_EMPTY_EMAIL))
    email: string;
}
