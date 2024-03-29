import { Column, Entity, Unique } from "typeorm";
import { BaseEntity } from "hichchi-nestjs-crud";

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
