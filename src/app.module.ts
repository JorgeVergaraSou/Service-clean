import { Module } from '@nestjs/common';
import { CleanController } from './app.controller';
import { CleanService } from './app.service';

@Module({
  imports: [],
  controllers: [CleanController],
  providers: [CleanService],
})
export class AppModule {}