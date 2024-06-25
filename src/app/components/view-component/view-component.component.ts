import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../app.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-component.component.html',
})
export class ViewComponentComponent implements OnInit {
  components: any[] = [];

  constructor(private componentService: ComponentService) { 
  }

  ngOnInit(): void {
    this.componentService.getComponents().subscribe(data => {
      this.components = data;
      console.log(data)
    });
  }

  deleteComponent(id: number) {
    this.componentService.deleteComponent(id).subscribe(() => {
      this.components = this.components.filter(component => component.id !== id);
    });
  }
}