import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs'
import { readParse, createID  } from './utils/utils';

@Injectable()
export class CleanService {

  private dataClean = join(__dirname, '../../data/services.json')

  getAll(){
    return readParse();
  }

// esto regresa al controlador lo solicitado por id
  getServiceById(id: string){
    const dataById = readParse();
    const FindCleanService = dataById.findIndex((clean: {id: number;}) => clean.id === Number(id))
   
    if(FindCleanService >= 0){
const resultClean = dataById[FindCleanService]
      return resultClean;
    } else{
      return 'No existe Servicio';
    }
  }

  async createNewServiceClean(cleanSer: any){
    try {
        const newClean = {id: createID(), ...cleanSer};
        console.log(newClean);
        const data = readParse();
        data.push(newClean);
        fs.writeFileSync(this.dataClean, JSON.stringify(data, null, 2))
        return data
    } catch (error) {
        throw new Error("Created failed");
    }
}

  // Aquí puedes definir tus funciones y métodos relacionados con el servicio de limpieza

  // Por ejemplo, una función para agendar un servicio de limpieza
  scheduleCleaning(date: Date, location: string): string {
    // Lógica para agendar el servicio de limpieza
    return `Se ha agendado un servicio de limpieza en ${location} para el ${date}`;
  }

  // Otra función para calcular el costo estimado de un servicio de limpieza
  calculateCleaningCost(area: number, cleaningType: string): number {
    let costPerSquareMeter = 10; // Costo por metro cuadrado
    if (cleaningType === 'profundo') {
      costPerSquareMeter *= 1.5; // Costo 50% más alto para limpieza profunda
    }

    const totalCost = costPerSquareMeter * area;
    return totalCost;
  }

  // Puedes agregar más funciones según las necesidades de tu aplicación

}