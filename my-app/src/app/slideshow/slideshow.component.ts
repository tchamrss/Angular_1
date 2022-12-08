import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['pexels-drew-williams-2657669.jpg','pexels-nao-triponez-792199.jpg','pexels-pixabay-459653.jpg'];
  headlines = [
    'Bring engineering  to the next level',
    'Born to code',
    'Graduate at THK'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() =>{
      this.currentImage++;
      this.currentImage = this.currentImage% this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);

    },8000);
    
  }

}
