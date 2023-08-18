import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {
  currentIndex: number = 0;
  imagenes: Array<{src:string, alt:string, visible: boolean}> = [
    { src: '../../../../../assets/imgHome/img-left-hamburgesa.jpg', alt: '', visible: true},
    { src: '../../../../../assets/imgHome/img-left-caja.jpg', alt: '', visible: false},
    { src: '../../../../../assets/imgHome/img-left-play.jpg', alt: '', visible: false}
  ];

  constructor() {}
  ngOnInit(): void {
    this.showNextImg();
    interval(4000).subscribe(()=> {
      this.showNextImg();
    });
  }
  showNextImg(): void{
    this.imagenes[this.currentIndex].visible = false;
    this.currentIndex = ( this.currentIndex + 1) % this.imagenes.length;
    this,this.imagenes[this.currentIndex].visible = true;
  }
}
