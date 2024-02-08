import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { UserService } from '../../services/user.service';
import Cookies from 'js-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './navbar-media.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('eventScroll') eventScroll!: ElementRef;
  public showAdminOptions: boolean | undefined;
  activeMenu: boolean = false;

  constructor(
    private readonly _userService: UserService,
    private cdRef: ChangeDetectorRef,
    private _router: Router
  ) {}

  ngOnInit() {
    this._userService.isLoggedIn().subscribe((loggedIn) => {
      this.showAdminOptions = loggedIn;
    });
    this.activateMenu();
  }

  activateMenu(): void {
    this.activeMenu = !this.activeMenu;
    if (this.eventScroll) {
      this.eventScroll.nativeElement.scrollIntoView({ behavior: 'instant' });
    }
  }

  logout() {
    Cookies.set('token', '');
    return false;
  }
}
