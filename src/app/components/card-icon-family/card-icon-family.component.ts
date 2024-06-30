import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-icon-family',
  templateUrl: './card-icon-family.component.html',
  styleUrls: ['./card-icon-family.component.scss']
})
export class CardIconFamilyComponent {
@Input() iconsFamily!:string;
}
