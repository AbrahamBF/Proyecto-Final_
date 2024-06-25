import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponentComponent } from './components/add-component/add-component.component';
import { UpdateComponentComponent } from './components/update-component/update-component.component';
import { ViewComponentComponent } from './components/view-component/view-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewBrandComponent } from './components/view-brand/view-brand.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { UpdateBrandComponent } from './components/update-brand/update-brand.component'

@NgModule({
  declarations: [
    AppComponent,
    AddComponentComponent,
    UpdateComponentComponent,
    ViewComponentComponent,
    ViewBrandComponent,
    AddBrandComponent,
    UpdateBrandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }