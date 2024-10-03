import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Repository } from 'typeorm';
import { Project } from './project.entity';
import * as Excel from 'exceljs';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const project = this.projectRepository.create(createProjectDto);
    return await this.projectRepository.save(project);
  }

  async upload(file: Express.Multer.File) {
    if (!file) {
      throw new Error('no file uploaded');
    }
    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(file.path);
    let jsonData = [];
    workbook.worksheets.forEach(function (sheet) {
      let firstRow = sheet.getRow(1);
      if (!firstRow.cellCount) return;
      let keys = firstRow.values;
      sheet.eachRow((row, rowNumber) => {
        if (rowNumber == 1) return;
        let values = row.values;
        let obj = {};
        for (let i = 1; i < +keys.length; i++) {
          obj[keys[i]] = values[i];
        }
        jsonData.push(obj);
      });
    });
    jsonData.forEach(async (project) => {
      const newProject = this.projectRepository.create(project);
      await this.projectRepository.save(newProject);
    })
    return jsonData;
  }

  async findAll() {
    const projects = await this.projectRepository.find();
    return projects;
  }

  async findOne(id: string) {
    const project = await this.projectRepository.findOneBy({ id });
    return project;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const updatedProject = await this.projectRepository.update(
      id,
      updateProjectDto,
    );
    return updatedProject;
  }

  async remove(id: string) {
    const removedProject = await this.projectRepository.delete(id);
    return removedProject;
  }
}
