import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Project {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Project 1', description: 'Project name' })
  @Column()
  name: string;

  @ApiProperty({
    example: 'info about project',
    description: 'Project description',
  })
  @Column()
  description: string;

  @ApiProperty({ example: '10.10.2024', description: 'Project start date' })
  @Column()
  startDate: Date;

  @ApiProperty({ example: '12.10.2024', description: 'Project end date' })
  @Column()
  endDate: Date;

  @ApiProperty({ example: 'ACTIVE', description: 'Project status' })
  @Column({ enum: ['ACTIVE', 'PENDING', 'CLOSED'], default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ example: '123', description: 'User who created project' })
  @Column({ default: null, nullable: true })
  createdBy: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ example: '123', description: 'User who updated project' })
  @Column({ default: null, nullable: true })
  updatedBy: string;
}
