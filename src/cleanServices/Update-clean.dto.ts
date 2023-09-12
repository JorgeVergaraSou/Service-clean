// update-clean.dto.ts
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Expose } from "class-transformer";

export class UpdateCleanDto {
  @IsNotEmpty()
  @Expose()
  @IsString()     
  service: string;

  @IsNotEmpty()
  @Expose()
  @IsString()
  img: string;

  @IsNotEmpty()
  @Expose()
  @IsNumber()
  price: number;  

  @IsNotEmpty()
  @Expose()
  @IsNumber()
  surface: number;

  @IsNotEmpty()
  @Expose()
  @IsNumber()
  id: number;
}
