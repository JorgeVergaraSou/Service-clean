import { HttpCode, HttpStatus, Injectable, NotFoundException, BadRequestException, } from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs'

import { Clean } from './cleanServ.interface';
import { application } from 'express';

const BASE_URL = 'http://localhost:3030/services/';

@Injectable()
export class CleanServService {

    //ESTO TRAE TODOS LOS SERVICIOS DISPONIBLES
    async getAll(): Promise<Clean[]> {
        const res = await fetch(BASE_URL);
        
        const parsed = await res.json();
        console.log(parsed);
        return parsed;
    }
    // FIN

    // esto regresa al controlador lo solicitado por id
    async getServiceById(id: number): Promise<any> {
        const res = await fetch(BASE_URL + id);
        const parsed = await res.json();
        if (Object.keys(parsed).length) return parsed;
        throw new NotFoundException(`Servicio con el id: ${id} no existe`);

    }
    // POST
    async createnNewService(clean: Clean) {
        const id = await this.newId();
        const newService = { ...clean, id };
        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newService),
        });
    }
    // FIN POST

    //INICIO DELETE BY ID
    async deleteServiceById(id: number): Promise<any> {
        const res = await fetch(BASE_URL + id, {
            method: 'DELETE',
        });
        const parsed = await res.json();
        return parsed;
    }

    //FIN DELETE BY ID

    //CREA UN NUEVO ID
    private async newId(): Promise<number> {
        const cleanId = await this.getAll();
        const id = cleanId.pop().id + 1;
        return id;
    }
    //FIN CREA UN NUEVO ID
}