import { Module } from "@nestjs/common";
import { MailerModule } from "@nestjs-modules/mailer";
import configuration from "../core/config/configuration";
import { join } from "path";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { EmailService } from "./services/email.service";

@Module({
    imports: [
        MailerModule.forRootAsync({
            useFactory: () => ({
                transport: {
                    host: configuration().smtp.host,
                    port: configuration().smtp.port,
                    secure: configuration().smtp.secure,
                    ignoreTLS: configuration().smtp.ignoreTLS,
                    auth: {
                        user: configuration().smtp.user,
                        pass: configuration().smtp.pass,
                    },
                },
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
        }),
    ],
    providers: [EmailService],
    exports: [EmailService],
})
export class EmailModule {}
