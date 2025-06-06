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
import { MatInputModule } from "@angular/material/input"
import { ButtonComponent } from "@shared/component/button/button.component"
import { SubscriptionHandler } from "@app/shared/utils/subscription-handler"
import { AuthService } from "@app/features/auth/data-access/services/auth.service"
import { LoginInterface } from "@app/features/auth/data-access/models/auth.types"
import { Router, RouterLink } from "@angular/router"
import { AppPaths } from "@app/app.routes"
import { NgOptimizedImage } from "@angular/common"
import { AuthPaths } from "@auth/auth.route"
import { ErrorMessageComponent } from "@shared/component/error-message/error-message.component"
import { NgOtpInputModule } from "ng-otp-input"



export interface LogingFormInterface {
  email: string
  password: string
}

@Component({
  selector: "app-verify-otp-form",
  templateUrl: "./verify-otp-form.component.html",
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    MatInputModule,
    ErrorMessageComponent,
    NgOtpInputModule,
    NgOptimizedImage,
    RouterLink
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyOtpFormComponent implements OnDestroy {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  AppPaths = AppPaths
  AuthPaths = AuthPaths
  hide = signal(true)
  loading = signal(false)
  message = signal("")
  showPassword = signal(false);


  subs = new SubscriptionHandler()

  ngOnDestroy(): void {
    this.subs.unSubscribe()
  }

    togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword())
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide())
    event.stopPropagation()
  }

  companyOtpForm = new FormGroup({
    otp: new FormControl("", {
      validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ],
    }),
  })

  get otp() {
    return this.companyOtpForm.get("otp")
  }

  onSubmit() {
    this.message.set("")
    if (this.companyOtpForm.invalid) return
    this.loading.set(true)
    this.subs.add = this.authService
      .login(this.companyOtpForm.value as LoginInterface)
      .subscribe({
        next: () => {
          this.loading.set(false)
          this.router.navigate([AppPaths.account])
        },
        error: (err) => {
          this.loading.set(false)
          console.log(err)
          this.message.set(err?.error?.message || err?.message)
        },
      })
  }
}
