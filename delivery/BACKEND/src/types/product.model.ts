export interface Product {
    id: number;
    nombre: string;
    categoria: 'Comida Rápida' | 'Comida para Animales' | 'Accesorios' | 'Implementos de Aseo' | 'Ropa' | 'Bebidas';
    sitios: string[];
  }
  