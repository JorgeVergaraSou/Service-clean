import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller('cleanServ')
export class CleanController {

  @Get()
  getSongs(@Res() res: Response) {
    const cleanServ = join(__dirname, '../data/services.json')
    res.sendFile(cleanServ)
  }

}
