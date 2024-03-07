import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";

@Controller()
export class AppController {
    @Get()
    keepAlive(@Res() res: Response): void {
        console.log("Staying alive!");
        res.status(HttpStatus.OK).send();
    }
}
