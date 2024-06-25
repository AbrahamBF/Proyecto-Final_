import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../app.service';

@Component({
    selector: 'app-view-brand',
    templateUrl: './view-brand.component.html',
})
export class ViewBrandComponent {
    brands: any | undefined;

    constructor(private brandService: BrandService) {
    }

    ngOnInit(): void{
        this.brandService.getBrands().subscribe(data => {
            this.brands = data;
            console.log(data)
        });
    }

    deletebrand(id: number) {
        this.brandService.deleteBrand(id).subscribe(data => {
            console.log(data);
            this.ngOnInit();
          });
      }
}