import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery: string = '';
  selectedCategory: string = 'Todos';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  search() {
    if (this.searchQuery) {
      this.filteredProducts = this.products.filter(product =>
        product.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
    this.filterByCategory();
  }

  filterByCategory() {
    if (this.selectedCategory !== 'Todos') {
      this.filteredProducts = this.filteredProducts.filter(product =>
        product.categoria === this.selectedCategory
      );
    }
  }

  resetFilters() {
    this.searchQuery = '';
    this.selectedCategory = 'Todos';
    this.filteredProducts = this.products;
  }
}

