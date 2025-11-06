import { Column, DeleteDateColumn, Entity, UpdateDateColumn } from "typeorm";

@Entity()
export class Health {

    @Column({ primary: true, generated: 'uuid' })
    id: string;

    @Column()
    name: string;

    @Column()
    description?: string;

    @Column({
        type: 'enum',
        enum: ['healthy', 'unhealthy', 'unknown'],
        default: 'unknown'
    })
    status?: string;

    @UpdateDateColumn()
    updatedAt?: Date;
    
    @DeleteDateColumn()
    deletedAt?: Date;
}
