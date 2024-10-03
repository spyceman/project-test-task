import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import ormConfig from '../ormconfig';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...ormConfig, autoLoadEntities: true }),
    AuthModule,
    UserModule,
    ProjectModule,
  ],
})
export class AppModule {}
 