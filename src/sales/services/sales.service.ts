import { Injectable } from "@nestjs/common";
import { SalesContactDto } from "../dto/sales-contact.dto";
import { EmailService } from "../../email/services/email.service";

@Injectable()
export class SalesService {
    constructor(private emailService: EmailService) {}

    async contact(salesContactDto: SalesContactDto): Promise<boolean> {
        return this.emailService.contact(salesContactDto);
    }
}
