import { Component } from '@angular/core';
import { Carousel } from '../../ui/carousel/carousel';

@Component({
selector:'app-home',
standalone:true,
imports:[Carousel],
templateUrl:'./home.html',
styleUrl:'./home.css'
})
export class Home{}