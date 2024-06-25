import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/app.service';
import { Brand} from 'src/app/Brand';

@Component({
    selector: 'app-update-brand',
    templateUrl: './update-brand.component.html',
})
export class UpdateBrandComponent{

  brand?: any
    data: any

    constructor(private service: BrandService, private route: ActivatedRoute, private router : Router) { }

    ngOnInit(): void {
        let id = this.route.snapshot.params['id'];
        this.service.getBrand(id).subscribe(data => {
          this.brand = data
          console.log(this.brand)
        })
      }
    
      form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        shop: new FormControl('', [Validators.required]),
      })
    
      submit(){
        this.data = this.form.value
        this.brand.name = this.data.name
        this.brand.shop = this.data.shop
        console.log(this.data)
        
        this.service.updateBrand(this.brand?.id, this.brand).subscribe(data => {
          console.log(data)
        })
        this.router.navigate(['/brands']);
    }
}