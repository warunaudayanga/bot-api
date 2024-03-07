import { Module } from "@nestjs/common";
import { SalesController } from "./controllers/sales.controller";
import { SalesService } from "./services/sales.service";
import { EmailModule } from "../email/email.module";

@Module({
    imports: [EmailModule],
    controllers: [SalesController],
    providers: [SalesService],
    exports: [SalesService],
})
export class SalesModule {}
