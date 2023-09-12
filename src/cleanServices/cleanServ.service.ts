import { Injectable } from '@nestjs/common';
import { UpdateCleanDto } from './Update-clean.dto';

const BASE_URL = 'http://localhost:3030/services/';

@Injectable()
export class CleanServService {

    createCleanService(body: any): any {
        throw new Error('Method not implemented.');
    }

    //ESTO TRAE TODOS LOS SERVICIOS DISPONIBLES
    async getAll(): Promise<any> {
        const res = await fetch(BASE_URL);
        const parsed = await res.json();
        console.log(parsed);
        return parsed;
    }
    // FIN

    // esto regresa al controlador lo solicitado por id
    async getServiceById(id: number): Promise<UpdateCleanDto> {
        const res = await fetch(`BASE_URL ${id}`);
        const parsed = await res.json();
        return parsed;
    }
    // POST
    async createNewService(clean: UpdateCleanDto): Promise<UpdateCleanDto> {
        const id = await this.newId();
        const newService = { ...clean, id };

        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newService),
        });
        const parsed = await res.json();
        return parsed;
    }
    // FIN POST

    //INICIO DELETE BY ID
    async deleteServiceById(id: number): Promise<UpdateCleanDto> {
        const res = await fetch(`BASE_URL  ${id}`, {
            method: 'DELETE',
        });
        const parsed = await res.json();
        return parsed;
    }

    //FIN DELETE BY ID

    async updateServiceById(id: number, Clean: UpdateCleanDto): Promise<UpdateCleanDto> {
        const isService = await this.getServiceById(id);
        if (!Object.keys(isService).length) return;
        const updatedService = { ...Clean, id };
        await fetch(`BASE_URL  ${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedService),
        });
    }

    //CREA UN NUEVO ID
    async newId(): Promise<number> {
        const cleanId = await this.getAll();
        const lastId = cleanId [cleanId.length - 1];
        const id = lastId.id +1;
        return id;
    }
    //FIN CREA UN NUEVO ID
}