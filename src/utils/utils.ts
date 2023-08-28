import * as fs from 'fs'
import {join} from 'path'

export function readParse(){
    const dataService = join(__dirname, '../../data/services.json')
    const fileContent = fs.readFileSync(dataService, 'utf-8');
    console.log(fileContent);
    return JSON.parse(fileContent);
}

export function createID(){
    const dataService = readParse();
    //esto es un registro
    const lastServiceClean = dataService[dataService.length - 1];
    //obtengo el valor del id del ultimo registro + 1
    const id = lastServiceClean.id + 1;
    return id;
}