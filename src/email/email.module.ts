import { Module } from "@nestjs/common";
import { MailerModule } from "@nestjs-modules/mailer";
import configuration from "../core/config/configuration";
import { join } from "path";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { EmailService } from "./services/email.service";

const getSmtpTransport = (): string => {
    return `smtp://${configuration().smtp.user}:${configuration().smtp.pass}@${configuration().smtp.host}`;
};

@Module({
    imports: [
        MailerModule.forRoot({
            transport: getSmtpTransport(),
            defaults: {
                from: `"Bot" <${configuration().smtp.from}>`,
            },
            template: {
                dir: join(__dirname, "templates/pages"),
                adapter: new HandlebarsAdapter(),
                options: {
                    strict: true,
                },
            },
            options: {
                partials: {
                    dir: join(__dirname, "templates/partials"),
                    options: {
                        strict: true,
                    },
                },
            },
            preview: true,
        }),
    ],
    providers: [EmailService],
    exports: [EmailService],
})
export class EmailModule {}
