import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Product } from './page/product/product';
import { Contact } from './page/contact/contact';
import { Singlepage } from './singlepage/singlepage';

export const routes: Routes = [
{
path:'',
component:Home
},
{
path:'about',
component:About
},
{
path:'product',
component:Product
},
{
path:'contact',
component:Contact
},
{
 path:"singlepage/:id",
 component:Singlepage
}
];