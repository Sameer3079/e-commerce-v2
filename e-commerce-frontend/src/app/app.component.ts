import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DisplayItemBlockComponent } from './components/display-item-block/display-item-block.component';
import ItemVO from './classes/value-objects/item-vo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    DisplayItemBlockComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce-frontend';
  categories = [
    { id: 1, name: "Automotive", },
    { id: 2, name: "Baby", },
    { id: 3, name: "Beauty and Personal Care", },
    { id: 4, name: "Women's Fashion", },
    { id: 5, name: "Men's Fashion", },
    { id: 6, name: "Girl's Fashion", },
    { id: 7, name: "Boy's Fashion", },
    { id: 8, name: "Health and Household", },
    { id: 9, name: "Home and Kitchen", },
    { id: 10, name: "Industrial and Scientific", },
    { id: 11, name: "Luggage", },
    { id: 12, name: "Movies & Television", },
    { id: 13, name: "Pet supplies", },
    { id: 14, name: "Software", },
    { id: 15, name: "Sports and Outdoors", },
    { id: 16, name: "Tools & Home Improvement", },
    { id: 17, name: "Toys and Games", },
    { id: 18, name: "Video Games", },
    { id: 19, name: "Electronics", },
  ]

  item1: ItemVO = {
    id: 1,
    name: 'Jordan New Releases',
    imageUrl: 'assets/images/air-jordan-4-retro-womens-shoes-s1LPnh.jpeg'
  }
}
