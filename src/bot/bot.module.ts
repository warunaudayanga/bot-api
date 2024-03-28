import { Module } from "@nestjs/common";
import { BotController } from "./controllers/bot.controller";
import { BotService } from "./services/bot.service";
import { JwtModule } from "@nestjs/jwt";

const clientSecret = "xuCyky56aTLFJpassUhoJaKVIjW+Kaj2//fzHtzbsOM=";

@Module({
    imports: [JwtModule.register({ secret: clientSecret })],
    controllers: [BotController],
    providers: [BotService],
})
export class BotModule {}
