import { HttpAdapterHost, NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ClassSerializerInterceptor, UnauthorizedException, ValidationPipe } from "@nestjs/common";
import configuration from "./core/config/configuration";
import { AllExceptionsFilter } from "hichchi-nestjs-common/filters";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const { httpAdapter } = app.get(HttpAdapterHost);
    app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
    app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin || configuration().app.allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new UnauthorizedException());
            }
        },
        credentials: true,
    });
    await app.listen(configuration().app.port);
}
// noinspection JSIgnoredPromiseFromCall
bootstrap();
