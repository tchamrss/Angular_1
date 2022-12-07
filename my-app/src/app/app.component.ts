import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  images = ['pexels-drew-williams-2657669.jpg','pexels-nao-triponez-792199.jpg','pexels-pixabay-459653.jpg'];
  currentImage = 0;
  showImage = true;

  ngOnInit(){
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
