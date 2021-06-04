import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Form {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    selectedState: string;
    
    @Column()
    Firstname:  string;
    
    @Column()
    Lastname: string;
    
    @Column()
    Address:  string;
    
    @Column()
    Zip: number;
    
    @Column()
    City: string;

    @CreateDateColumn()
    CreatedAt: Date;

}