import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss','./about-media.component.scss'],
})
export class AboutComponent {
  public title: string;
  public subtitle: string;
  public web: string;

  constructor() {
    this.title = 'Daniel Arturo Berroteran Navarro';

    this.subtitle = 'Desarrollador web';

    this.web = 'daniload.com';
  }
}
