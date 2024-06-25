import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponentComponent } from './components/add-component/add-component.component';
import { UpdateComponentComponent } from './components/update-component/update-component.component';
import { ViewComponentComponent } from './components/view-component/view-component.component';
import { ViewBrandComponent } from './components/view-brand/view-brand.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { UpdateBrandComponent } from './components/update-brand/update-brand.component';

const routes: Routes = [
  { path: '', component: ViewComponentComponent },
  { path: 'add', component: AddComponentComponent },
  { path: 'update/:id', component: UpdateComponentComponent},

  { path: 'brands', component: ViewBrandComponent },
  { path: 'addbrand', component: AddBrandComponent },
  { path: 'updatebrand/:id', component: UpdateBrandComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }