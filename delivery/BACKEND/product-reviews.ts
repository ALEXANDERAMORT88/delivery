
import { Component, Input } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent {
  @Input() product: Product;
  newReviewText: string;

  addReview() {
    // Lógica para agregar el comentario y calificación al producto
  }
}
