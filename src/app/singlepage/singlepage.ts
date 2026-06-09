import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Api } from '../api';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-singlepage',
  imports: [RouterLink],
  templateUrl: './singlepage.html',
  styleUrl: './singlepage.css',
})
export class Singlepage {
  singledata: any;
  productId: any;
  constructor(private api:Api,private cdr:ChangeDetectorRef,private ar:ActivatedRoute)
  {}
  ngOnInit()
  {
     this.productId=this.ar.snapshot.params['id'];
     this.api.getsingleproduct(this.productId).subscribe((res:any)=>{
      this.singledata=res;
      this.cdr.detectChanges()
     })
  }
}
