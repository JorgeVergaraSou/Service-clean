import { Get, Post, Delete, Put, Controller, Param, Body, HttpCode, HttpStatus, ParseIntPipe, Query, } from '@nestjs/common';
import { CleanServService } from './cleanServ.service';
import { Clean } from './cleanServ.interface';

@Controller('cleanServ')
export class CleanServController {
    constructor(private cleanServService: CleanServService) { }

    // ESTO DEVUELVE TODOS LOS REGISTROS
    @Get()
    getAll() {
        return this.cleanServService.getAll();
    }

    //ESTA PARTE REGRESA UN REGISTRO SOLICITADO POR ID
    @Get(':id')
    getServiceById(@Param('id') id: number) {
        const selectServiceClean = this.cleanServService.getServiceById(id);
        return selectServiceClean;
    }
    // ESTO AGREGA UN NUEVO DATO A LA BD
    @Post()
    createnNewService(@Body() body): Promise<any> {
        return this.cleanServService.createnNewService(body);
    }
    //ESTO BORRA UN REGISTRO DE LA BD
    @Delete(':id')
    deleteServiceById(@Param('id') id: number) {
        return this.cleanServService.deleteServiceById(id);
    }

    @Put(':id')
    @HttpCode(204)
    updateServiceById(@Param('id') id: number, @Body() body): Promise<void> {
        return this.cleanServService.updateServiceById(id, body);
    }

}