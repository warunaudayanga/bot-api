import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { UserEntity } from "../entities/user.entity";
import { CreateUserDto } from "../dto/create-user.dto";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post("register")
    async registerUser(@Body() userDto: CreateUserDto): Promise<UserEntity> {
        return this.userService.save(userDto);
    }
}
