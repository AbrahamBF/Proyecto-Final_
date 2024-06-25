import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/app.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
})
export class AddBrandComponent {

  constructor(private brandService: BrandService, private router: Router) { }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    shop: new FormControl('', Validators.required)
  });

  addBrand() {
    const data = this.form.value;
    this.brandService.addBrand(data).subscribe(() => {
      this.router.navigate(['/brands']);
    });
  }
}