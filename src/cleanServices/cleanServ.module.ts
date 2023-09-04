import { Module } from '@nestjs/common';
import { CleanServService } from './cleanServ.service';
import { CleanServController } from './cleanServ.controller';
@Module({
  controllers: [CleanServController],
  providers: [CleanServService],
})
export class CleanServicesModule {}