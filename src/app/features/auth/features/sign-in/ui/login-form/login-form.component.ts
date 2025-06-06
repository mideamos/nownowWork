import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  signal,
} from "@angular/core"
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { ButtonComponent } from "@shared/component/button/button.component"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { SubscriptionHandler } from "@app/shared/utils/subscription-handler"
import { AuthService } from "@app/features/auth/data-access/services/auth.service"
import { LoginInterface } from "@app/features/auth/data-access/models/auth.types"
import { Router, RouterLink } from "@angular/router"
import { AppPaths } from "@app/app.routes"
import { NgOptimizedImage } from "@angular/common"
import { AuthPaths } from "@auth/auth.route"
import { InputStyle } from '@shared/component/input/directive/input';
export interface LogingFormInterface {
  email: string
  password: string
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonComponent,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
    InputStyle,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnDestroy {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  AppPaths = AppPaths;
  AuthPaths = AuthPaths;
  hide = signal(true);
  loading = signal(false);
  message = signal('');
  showPassword = signal(false);

  subs = new SubscriptionHandler();

  ngOnDestroy(): void {
    this.subs.unSubscribe();
  }

  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  loginForm = new FormGroup({
    email: new FormControl<string>('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    rememberMe: new FormControl<boolean>(true),
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.message.set('');
    if (this.loginForm.invalid) return;
    this.loading.set(true);
    this.subs.add = this.authService
      .login(this.loginForm.value as LoginInterface)
      .subscribe({
        next: () => {
          this.loading.set(false);
          this.router.navigate([AppPaths.account]);
        },
        error: (err) => {
          this.loading.set(false);
          console.log(err);
          this.message.set(err?.error?.message || err?.message);
        },
      });
  }
}
