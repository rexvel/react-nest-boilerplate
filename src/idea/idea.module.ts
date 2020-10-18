import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { IdeaEntity } from './idea.entity';
import { IdeaController } from './idea.controller';
import { IdeaService } from './idea/idea.service';

@Module({
  imports:[TypeOrmModule.forFeature([IdeaEntity])],
  controllers: [IdeaController],
  providers: [IdeaService]
})
export class IdeaModule {}
