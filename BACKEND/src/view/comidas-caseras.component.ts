// comidas-caseras.component.ts
import { Component, OnInit } from '@angular/core';
import { ComidaService } from '../services/comida.service';

@Component({
  selector: 'app-comidas-caseras',
  templateUrl: './comidas-caseras.component.html',
 
})
export class ComidasCaserasComponent implements OnInit {
  comidasCaseras: string[] = [];

  constructor(private comidaService: ComidaService) {}

  ngOnInit(): void {
    this.comidasCaseras = this.comidaService.comidasCaseras;
  }
}
