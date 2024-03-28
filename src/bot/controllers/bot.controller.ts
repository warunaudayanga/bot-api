import { Controller, Post } from "@nestjs/common";
import { BotService } from "../services/bot.service";

@Controller("bot")
export class BotController {
    constructor(private readonly botService: BotService) {}

    @Post("generate-jwt")
    async generateJwt() {
        return this.botService.generateJwt();
    }
}
