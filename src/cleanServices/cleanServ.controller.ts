import { Get, Post, Delete, Put, Controller, Param, Body, HttpStatus, ParseIntPipe, Res, ValidationPipe, BadRequestException, UsePipes, NotFoundException } from '@nestjs/common';
import { CleanServService } from './cleanServ.service';
import { Response } from 'express'; // No es necesario importar Response directamente
import { UpdateCleanDto } from './Update-clean.dto';

@Controller('cleanServ')
export class CleanServController {
    constructor(private readonly cleanServService: CleanServService) { }

    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    async getAll(@Res() res: Response): Promise<any> {
        try {
        const cleans = await this.cleanServService.getAll();
       return res.status(HttpStatus.OK).json(cleans);
    }
    catch (error) {
        return res.status(HttpStatus.BAD_REQUEST).json(error);
      }
    }

    @Get(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async getServiceById(@Param('id') id: number, @Res() res: Response): Promise<any> {
        try{ 
        const clean = await this.cleanServService.getServiceById(id);
        if (Object.keys(clean)) {
          return  res.status(HttpStatus.OK).send(clean);
        } else {
            throw new NotFoundException(`service with id ${id} not found.`);
        } 
        }catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
          }
    }

// POST INICIO
    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async createNewService(
      @Body() UpdateCleanDto: UpdateCleanDto,
      @Res() res: Response,
    ): Promise<any> {
      try {
        const serviceResponse = await this.cleanServService.createNewService(UpdateCleanDto);
        await res.status(HttpStatus.CREATED).send(serviceResponse);
      } catch (error) {
        throw new BadRequestException('fallo la creacion');
      }
    }
// POST FIN

    @Delete('/:id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async deleteServiceById(
      @Param('id') id: number,
      @Res() res: Response,
    ): Promise<any> {
      try {
        const serviceResponse = await this.cleanServService.deleteServiceById(id);
        res.status(HttpStatus.NO_CONTENT).send(serviceResponse);
      } catch (error) {
        throw new BadRequestException('FALLO EL BORRADO');
      }
    }

@Put('/:id')
@UsePipes(new ValidationPipe({ transform: true }))
  async updateServiceById(
    @Param('id') id: number,
    @Body() updateCleanDto: UpdateCleanDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const serviceResponse = await this.cleanServService.updateServiceById(id, updateCleanDto);
      res.status(HttpStatus.NO_CONTENT).send(serviceResponse);
    } catch (error) {        
      throw new BadRequestException('Fallo el update');
    }
  }
}