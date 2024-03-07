import { Body, Controller, Post } from "@nestjs/common";
import { SalesService } from "../services/sales.service";
import { SalesContactDto } from "../dto/sales-contact.dto";

@Controller("sales")
export class SalesController {
    constructor(private salesService: SalesService) {}

    @Post("contact")
    async contact(@Body() salesContactDto: SalesContactDto) {
        return await this.salesService.contact(salesContactDto);
    }
}
