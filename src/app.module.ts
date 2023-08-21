import { Module } from '@nestjs/common';
import { CleanController } from './app.controller';


@Module({
  imports: [],
  controllers: [CleanController],
  providers: [],
})
export class AppModule {}