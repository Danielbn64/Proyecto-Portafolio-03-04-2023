import { Component, OnInit, DoCheck } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../../environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', './projects-media.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects!: Project[];
  public url: string;
  public empty!: boolean;
  public emptyMessage!: string;

  constructor(private readonly _projectService: ProjectService) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this._projectService.getProjects().subscribe((response) => {
      if (response.body.projects) {
        this.projects = response.body.projects;
        if (response.body.projects.length == 0) {
          this.empty = true;
          this.emptyMessage = 'No se ha subido ningun proyecto';
        }
      } else {
        this.empty = false;
        this.emptyMessage = '';
      }
    });
  }
}
