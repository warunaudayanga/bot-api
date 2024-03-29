import { Column, Entity } from "typeorm";
import { BaseEntity } from "hichchi-nestjs-crud";
import { Unique } from "typeorm/browser";

@Entity("booking")
@Unique(["botId", "phone"])
export class BookingEntity extends BaseEntity {
    @Column()
    botId: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    location: string;

    @Column()
    vehicleType: string;
}
