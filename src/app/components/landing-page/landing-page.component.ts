import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../../environments/environment';
import { Project } from '../../models/project';
import { fading } from '../animation';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: [
    './landing-page.component.scss',
    './landing-page-main.component.scss',
    './landing-page-media.component.scss',
    './landing-page-media-phone.component.scss',

  ],
  animations: [fading],
})
export class LandingPageComponent implements OnInit {
  public projects!: Project[];
  public featured!: Array<Project>;
  public url: string;
  public activate: boolean = false;
  public notEnough!: string;

  constructor(private readonly _projectService: ProjectService) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getFeatured();
  }

  getFeatured() {
    this._projectService.getProjects().subscribe((response) => {
      if (response.body.projects.length == 3) {
        this.activate = true;
        this.notEnough = '';
        this.projects = response.body.projects;
        this.featured = new Array<Project>();

        for (let project of this.projects) {
          if (project.category == 'destacado') {
            this.featured.push(project);
          } 
        }
      } else {
        this.activate = false;
        this.notEnough = 'No hay suficientes proyectos destacados';
      }
    });
  }
}
