import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [

  {path:"", redirectTo:"start" , pathMatch:"full"},
  {path:"start" , component:StartComponent},
  {path:"about", component:AboutComponent},
  {path:"portfolio", component:PorfolioComponent},
  {path:"contact" , component:ContactComponent},
  {path:"**" , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
