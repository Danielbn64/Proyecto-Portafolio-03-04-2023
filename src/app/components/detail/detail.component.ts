import { Component, OnInit, DoCheck } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../../environments/environment';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../app/modules/auth/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss', './detail-media.component.scss'],
})
export class DetailComponent implements OnInit {
  public showAdminOptions: boolean | undefined;
  public url: string;
  public project!: Project;
  public linkCode!: string;
  public linkWeb!: string;

  constructor(
    private readonly _projectService: ProjectService,
    private readonly _userService: UserService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._userService.isLoggedIn().subscribe((loggedIn) => {
      this.showAdminOptions = loggedIn;
    });

    this._route.params.subscribe((params) => {
      let id = params['id'];
      this.getProject(id);
    });
  }

  getProject(id: any) {
    this._projectService.getProject(id).subscribe((response) => {
      this.project = response.body.project;
    });
  }

  deleteProject(id: any) {
    this._projectService.deleteProject(id).subscribe((response) => {
      if (response.body.project) {
        this._router.navigate(['/proyectos']);
      }
    });
  }
}
