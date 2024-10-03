import { ApiProperty } from "@nestjs/swagger";
import { ProjectStatus } from "../../enums/project-status.enum";

export class CreateProjectDto {
  @ApiProperty({ example: 'Project 1', description: 'Project name' })
  name: string;

  @ApiProperty({
    example: 'info about project',
    description: 'Project description',
  })
  description: string;

  @ApiProperty({ example: '10.10.2024', description: 'Project start date' })
  startDate: Date;

  @ApiProperty({ example: '12.10.2024', description: 'Project end date' })
  endDate: Date;

  @ApiProperty({ example: 'ACTIVE', description: 'Project status' })
  status: ProjectStatus;

  @ApiProperty({ example: '123', description: 'User who created project' })
  createdBy: string;
}
