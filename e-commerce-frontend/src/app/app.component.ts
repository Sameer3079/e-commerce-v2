import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce-frontend';
  categories = [
    { name: "Automotive", },
    { name: "Baby", },
    { name: "Beauty and Personal Care", },
    { name: "Women's Fashion", },
    { name: "Men's Fashion", },
    { name: "Girl's Fashion", },
    { name: "Boy's Fashion", },
    { name: "Health and Household", },
    { name: "Home and Kitchen", },
    { name: "Industrial and Scientific", },
    { name: "Luggage", },
    { name: "Movies & Television", },
    { name: "Pet supplies", },
    { name: "Software", },
    { name: "Sports and Outdoors", },
    { name: "Tools & Home Improvement", },
    { name: "Toys and Games", },
    { name: "Video Games", },
    { name: "Electronics", },
  ]
}
