import { Column, Entity, Unique } from "typeorm";
import { BaseEntity } from "hichchi-nestjs-crud";

@Entity("user")
@Unique(["email"])
export class UserEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    email: string;
}
