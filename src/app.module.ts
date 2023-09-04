import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { CleanServicesModule } from './CleanServices/cleanServ.module';

@Module({
  imports: [
   // ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),
    CleanServicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}