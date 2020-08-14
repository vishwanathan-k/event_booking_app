import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Booking {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phoneNo: string;

    @Column()
    numberOfSeats: number;

    @Column()
    namerOfAttendee: string;
    
    @Column()
    totalNoOfSeats:number;    

    @Column()
    userImage: string;

    @Column()
    eventDate: Date;    
}
