import { Controller, Get, Res, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { Response } from 'express';
import { CleanService } from './app.service';

@Controller('cleanServ')
export class CleanController {

  constructor(private CleanService: CleanService){}
// ESTO DEVUELVE TODOS LOS REGISTROS
  @Get()
  getAll(@Res() res: Response ){
   res.send({data: this.CleanService.getAll(), success: true, code:200})
  }

  //ESTA PARTE REGRESA UN REGISTRO SOLICITADO POR ID
  @Get(':id')
  getServiceById(@Param('id') id: string ){
const selectServiceClean = this.CleanService.getServiceById(id);
return selectServiceClean; 
  }


  @Post()
  createNewServiceClean(@Body() cleanSer: any){
   const newServiceList = this.CleanService.createNewServiceClean(cleanSer)
   return {
    message: 'Data saved',
    cleanSer: cleanSer,
    success: true,
    code: 201,
    data: newServiceList
  }
  }

  @Delete ()
  deleteServiceClean(){
return ' registro eliminado'
  }

  @Put ()
  putServiceClean(){
return ' registro actualizado'
  }
}
