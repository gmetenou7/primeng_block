import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './testimonials.component.html'
})
export class TestimonialsComponent implements OnInit{

  company: any;

  responsiveOptions: [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  block1 = ``;

  block2 = ``;

  ngOnInit() {
    this.company = [
      {name: 'Annie Lanphear', image: '3', text: '“When I found your components it was like the Sun came out after a year of pouring rain. Thanks and congratulations.”'},
      {name: 'Annie Lanphear', image: '2', text: '“When I found your components it was like the Sun came out after a year of pouring rain. Thanks and congratulations.”'},
      {name: 'Annie Lanphear', image: '3', text: '“When I found your components it was like the Sun came out after a year of pouring rain. Thanks and congratulations.”'},
      {name: 'Annie Lanphear', image: '4', text: '“When I found your components it was like the Sun came out after a year of pouring rain. Thanks and congratulations.”'},
    ];
  }

}
