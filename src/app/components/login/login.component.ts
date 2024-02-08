import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login-media.component.scss'],
})
export class LoginComponent {
  userForm!: FormGroup;
  public email!: string;
  public password!: string;
  public role: string;
  public user: User;
  public hide: boolean | undefined;
  public invalid: string = '';

  constructor(
    private readonly _userService: UserService,
    private readonly fb: FormBuilder
  ) {
    this.role = 'ROLE_ADMIN';
    this.user = new User('', '', '', '', this.role);
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'
          ),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(values: any): void {
    this.user.email = values.email;
    this.user.password = values.password;
    this._userService.login(this.user).subscribe(
      (response) => {
        if (response.status == 200) {
          window.location.href = '/panel-administrador';
        }
      },

      (error) => {
        this.invalid = error.error.message;
      }
    );
  }
}
