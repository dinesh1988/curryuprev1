import { Component } from '@angular/core';
import { Image } from './shared';
// import {Material} from  './material.ts';
@Component({
  selector: 'readme-page',
  templateUrl: './readme-page.component.html',
  styleUrls: ['./readme-page.component.scss']
})
export class ReadmePageComponent  {
 panelOpenState: boolean = false;
  public images = IMAGES;
  constructor() {
  }
}

const IMAGES: Image[] = [

  { 'title': 'Chettinad chicken', 'url': '/assets/images/square1.png' },
  { 'title': 'Madras chicken',     'url': '/assets/images/square2.png' },
  { 'title': 'Fish kozhambu',     'url': '/assets/images/square3.png' },
  { 'title': 'Shrimp curry',      'url': '/assets/images/square4.png' },
  // { 'title': 'Mutton gravy',      'url': '/assets/images/honey-lime-garlic-chicken-102.jpg' },
];
