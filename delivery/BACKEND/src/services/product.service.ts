import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      nombre: 'Hamburguesa Deluxe',
      categoria: 'Comida Rápida',
      sitios: ['Restaurante A', 'Food Truck B']
    },
    {
      id: 2,
      nombre: 'Croquetas para Gatos',
      categoria: 'Comida para Animales',
      sitios: ['Tienda de Mascotas X', 'Supermercado Y']
    },
    {
      id: 3,
      nombre: 'Collar para Perros',
      categoria: 'Accesorios',
      sitios: ['Tienda de Mascotas Z', 'Tienda en Línea']
    },
    {
      id: 1,
      nombre: 'Hamburguesa Deluxe',
      categoria: 'Comida Rápida',
      sitios: ['Restaurante A', 'Food Truck B']
    },
    {
      id: 2,
      nombre: 'Croquetas para Gatos',
      categoria: 'Comida para Animales',
      sitios: ['Tienda de Mascotas X', 'Supermercado Y']
    },
    {
      id: 3,
      nombre: 'Collar para Perros',
      categoria: 'Accesorios',
      sitios: ['Tienda de Mascotas Z', 'Tienda en Línea']
    },
    {
      id: 4,
      nombre: 'Champú para Perros',
      categoria: 'Implementos de Aseo',
      sitios: ['Tienda de Mascotas Z', 'Farmacia']
    },
    {
      id: 5,
      nombre: 'Camiseta Estampada',
      categoria: 'Ropa',
      sitios: ['Tienda de Ropa A', 'Tienda en Línea B']
    },
    {
      id: 6,
      nombre: 'Refresco de Cola',
      categoria: 'Bebidas',
      sitios: ['Supermercado X', 'Tienda en Línea C']
    },
    {
      id: 7,
      nombre: 'Pizza de Pepperoni',
      categoria: 'Comida Rápida',
      sitios: ['Pizzería D', 'Restaurante E']
    },
    {
      id: 8,
      nombre: 'Alimento para Peces',
      categoria: 'Comida para Animales',
      sitios: ['Tienda de Mascotas X', 'Acuario Local']
    },
    {
      id: 9,
      nombre: 'Correa para Perros',
      categoria: 'Accesorios',
      sitios: ['Tienda de Mascotas Z', 'Parque de Perros']
    },
    {
      id: 10,
      nombre: 'Cepillo para Gatos',
      categoria: 'Implementos de Aseo',
      sitios: ['Tienda de Mascotas Z', 'Tienda en Línea D']
    },
    {
      id: 11,
      nombre: 'Jeans Denim',
      categoria: 'Ropa',
      sitios: ['Tienda de Ropa E', 'Centro Comercial F']
    },
    {
      id: 12,
      nombre: 'Agua Mineral',
      categoria: 'Bebidas',
      sitios: ['Supermercado X', 'Tienda en Línea G']
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}

searchProducts(query: string): Product[] {
  return this.products.filter(product => product.nombre.toLowerCase().includes(query.toLowerCase()));
}

filterProductsByCategory(category: string): Product[] {
  return this.products.filter(product => product.categoria === category);
}