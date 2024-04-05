import { Component } from '@angular/core';

@Component({
  selector: 'app-test-filter',
  templateUrl: './test-filter.component.html',
  styleUrl: './test-filter.component.css'
})
export class TestFilterComponent {
  search : string = '';
  selectedFilter: string = 'name';
  products : any[] = [
    {
      name : 'Fanta',
      price : 12313,
      description : 'nice fanta',
    }, 
    {
      name : 'Cola',
      price : 3131,
      description : 'cool cola',
    },
    {
      name : 'Sprite',
      price : 6237,
      description : 'good sprite',
    }
  ];
}
