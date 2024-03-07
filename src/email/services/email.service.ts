import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { SalesContactDto } from "../../sales/dto/sales-contact.dto";

@Injectable()
export class EmailService {
    constructor(private mailerService: MailerService) {}

    async contact(salesContactDto: SalesContactDto): Promise<boolean> {
        try {
            await this.mailerService.sendMail({
                to: "support@bob.com",
                subject: `Contact Sates Team`,
                template: "contact-sales",
                context: {
                    ...salesContactDto,
                },
            });
            return true;
        } catch {
            throw new InternalServerErrorException();
        }
    }
}
