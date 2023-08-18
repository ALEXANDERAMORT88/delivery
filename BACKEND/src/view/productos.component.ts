// restaurantes.component.ts
import { Component, OnInit } from '@angular/core';
import { ComidaService } from '../services/comida.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
  restaurantes: string[] = [];

  constructor(private comidaService: ComidaService) {}

  ngOnInit(): void {
    this.restaurantes = this.comidaService.restaurantes;
  }
}
