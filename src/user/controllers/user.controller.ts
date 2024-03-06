import { Controller, Post } from "@nestjs/common";

@Controller("user")
export class UserController {
    constructor() {}

    @Post("register")
    async registerUser(): Promise<string> {
        return "User registered successfully";
    }
}
