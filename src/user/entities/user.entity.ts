import { Column, Entity, Unique } from "typeorm";
import { BaseEntity } from "hichchi-nestjs-crud";
import { IUserEntity } from "hichchi-nestjs-common/interfaces";
import { Exclude } from "class-transformer";

@Entity("user")
@Unique(["email"])
export class UserEntity extends BaseEntity implements IUserEntity {
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    @Exclude()
    password: string;

    @Column()
    @Exclude()
    salt: string;
}
