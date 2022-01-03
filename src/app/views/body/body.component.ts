import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

    customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    margin: 5,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  slides = [
    {
      id: 1,
      src: "/assets/img/img06.jpg",
    },
    {
      id: 2,
      src: "/assets/img/img07.jpg",
    },
    {
      id: 3,
      src: "/assets/img/img08.jpg",
    },
    {
      id: 4,
      src: "/assets/img/img09.jpg",
    },
    {
      id: 5,
      src: "/assets/img/img10.jpg",
    },   
    {
      id: 5,
      src: "/assets/img/img12.jpg",
    },
    {
      id: 5,
      src: "/assets/img/img13.jpg",
    },
    {
      id: 5,
      src: "/assets/img/img14.jpg",
    },
    {
      id: 5,
      src: "/assets/img/img15.jpg",
    },
    {
      id: 5,
      src: "/assets/img/img16.jpg",
    },
    {
      id: 5,
      src: "/assets/img/img17.jpg",
    },
    {
      id: 5,
      src: "/assets/img/img18.jpg",
    },
    {
      id: 5,
      src: "/assets/img/img19.jpg",
    },
    {
      id: 5,
      src: "/assets/img/img20.jpg",
    },
    {
      id: 5,
      src: "/assets/img/img21.jpg",
    },
    {
      id: 5,
      src: "/assets/img/img22.jpg",
    },
    {
      id: 5,
      src: "/assets/img/img23.jpg",
    },
    {
      id: 5,
      src: "/assets/img/img24.jpg",
    },   
    {
      id: 5,
      src: "/assets/img/img26.jpg",
    },
    {
      id: 5,
      src: "/assets/img/img27.jpg",
    },
    {
      id: 5,
      src: "/assets/img/img28.jpg",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

 

}
