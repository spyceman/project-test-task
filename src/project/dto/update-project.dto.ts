import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';
import { ProjectStatus } from '../../enums/project-status.enum';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @ApiProperty({
    example: 'Project 1',
    description: 'Project name',
    required: false,
  })
  name?: string;

  @ApiProperty({
    example: 'info about project',
    description: 'Project description',
    required: false,
  })
  description?: string;

  @ApiProperty({
    example: '10.10.2024',
    description: 'Project start date',
    required: false,
  })
  startDate?: Date;

  @ApiProperty({
    example: '12.10.2024',
    description: 'Project end date',
    required: false,
  })
  endDate?: Date;

  @ApiProperty({
    example: 'ACTIVE',
    description: 'Project status',
    required: false,
  })
  status?: ProjectStatus;

  @ApiProperty({
    example: '123',
    description: 'User who updated project',
    required: false,
  })
  updatedBy?: string;
}
