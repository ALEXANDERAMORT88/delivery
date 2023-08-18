// comida.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {
  comidasRapidas: string[] = ['Hamburguesas', 'Perros Calientes', 'Pollo', ...];
  comidasCaseras: string[] = ['Bandeja Paisa', 'Sopa de Mondongo', 'Caldos', ...];
  restaurantes: string[] = ['Restaurante Rápido', 'Comida Casera Express', 'Sabor Criollo', ...];
  productos: string[] = ['Producto 1', 'Producto 2', 'Producto 3', ...];
}
