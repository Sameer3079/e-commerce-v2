import { Component, Input } from '@angular/core';
import ItemVO from '../../classes/value-objects/item-vo';

@Component({
  selector: 'app-display-item-block',
  standalone: true,
  imports: [],
  templateUrl: './display-item-block.component.html',
  styleUrl: './display-item-block.component.scss'
})
export class DisplayItemBlockComponent {

  @Input() itemVO!: ItemVO;

}
