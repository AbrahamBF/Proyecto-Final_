import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentService, BrandService } from 'src/app/app.service';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
})
export class AddComponentComponent implements OnInit {

  brands: any[] = [];

  constructor(private componentService: ComponentService, private brandService: BrandService, private router: Router) { }

  ngOnInit(): void {
    this.loadBrands();
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required)
  });

  loadBrands() {
    this.brandService.getBrands().subscribe(brands => {
      this.brands = brands;
    });
  }

  addComponent() {
    const data = this.form.value;
    this.componentService.addComponent(data).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}