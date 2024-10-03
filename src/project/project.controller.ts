import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UseGuards, Put} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '../middleware/auth.guard';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Project } from './project.entity';

@ApiTags('Projects')
@Controller('project')
@UseGuards(AuthGuard)
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @ApiOperation({ summary: 'Create project' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Project,
  })
  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @ApiOperation({ summary: 'Upload excel file' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Project,
  })
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.projectService.upload(file);
  }

  @ApiOperation({ summary: 'Get all projects' })
  @ApiCreatedResponse({
    type: [Project],
  })
  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @ApiOperation({ summary: 'Get project by id' })
  @ApiCreatedResponse({
    type: Project,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }

  @ApiOperation({ summary: 'Update project by id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: Project,
  })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(id, updateProjectDto);
  }

  @ApiOperation({ summary: 'Delete project by id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: Project,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(id);
  }
}
