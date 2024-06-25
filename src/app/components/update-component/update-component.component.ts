import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentService, BrandService } from 'src/app/app.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
})
export class UpdateComponentComponent implements OnInit {

  component?: any;
  data: any;
  brands: any[] = [];

  constructor(
    private service: ComponentService,
    private brandService: BrandService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.getComponent(id).subscribe((data) => {
      this.component = data;
      this.form.patchValue(data); // Populate form with existing data
      console.log(this.component);
    });
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

  submit() {
    this.data = this.form.value;
    this.service.updateComponent(this.component.id, this.data).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/']);
    });
  }
}