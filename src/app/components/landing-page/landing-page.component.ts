import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../../environments/environment';
import { Project } from '../../models/project';
import { CardInfoSkills } from '../../models/card-info-skills';
import {
  cardInfoSkillLayout,
  cardInfoSkillAlgorithms,
  cardInfoSkillDataSource,
} from '../../../layouts-info';
import { CardInfoService } from '../../services/card-info.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: [
    './landing-page.component.scss',
    './landing-page-main.component.scss',
    './landing-page-media.component.scss',
    './landing-page-media-phone.component.scss',
  ],
})
export class LandingPageComponent implements OnInit {
  public projects!: Project[];
  public featured!: Array<Project>;
  public url: string;
  public activate: boolean = false;
  public notEnough!: string;
  public cardInfo: CardInfoSkills[] = [];

  constructor(
    private readonly _projectService: ProjectService,
    private readonly _cardInfoService: CardInfoService
  ) {
    this.url = Global.url;
  }

  getCardInfo() {
    this.cardInfo.push(
      this._cardInfoService.getInfo(
        cardInfoSkillLayout.title,
        cardInfoSkillLayout.description,
        cardInfoSkillLayout.inconsFamiy,
        cardInfoSkillLayout.cardImage
      )
    );
    this.cardInfo.push(
      this._cardInfoService.getInfo(
        cardInfoSkillAlgorithms.title,
        cardInfoSkillAlgorithms.description,
        cardInfoSkillAlgorithms.inconsFamiy,
        cardInfoSkillAlgorithms.cardImage
      )
    );
    this.cardInfo.push(
      this._cardInfoService.getInfo(
        cardInfoSkillDataSource.title,
        cardInfoSkillDataSource.description,
        cardInfoSkillDataSource.inconsFamiy,
        cardInfoSkillDataSource.cardImage
      )
    );
  }

  ngOnInit(): void {
    this.getCardInfo();
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
          if (project.category == 'destacados') {
            this.featured.push(project);
          } else {
            this.activate = false;
            this.notEnough = 'No hay suficientes proyectos destacados';
          }
        }
      } else {
        this.activate = false;
        this.notEnough = 'No hay suficientes proyectos destacados';
      }
    });
  }
}
