import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { Api } from '../../api';

@Component({
selector:'app-product',
standalone:true,
imports:[CommonModule,Card],
templateUrl:'./product.html',
styleUrl:'./product.css'
})
export class Product{

products:any;
constructor(private api:Api,private cdr:ChangeDetectorRef)
{}
ngOnInit()
{
  this.api.getAllproducts().subscribe((res: any)=>{
     this.products=res;
     this.cdr.detectChanges()
  })
}
}