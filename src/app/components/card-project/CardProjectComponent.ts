import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';
import { Global } from '../../../environments/environment';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss'],
})
export class CardProjectComponent {
  public url: string;
  @Input() project!: Project;
  constructor() {
    this.url = Global.url;
  }
}
