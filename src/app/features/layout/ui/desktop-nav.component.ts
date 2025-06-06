import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { AppPaths } from '@app/app.routes';
import { AccountPaths } from '../layout.routes';

@Component({
  selector: 'app-desktop-nav',
  template: `
    <nav class="flex items-center justify-between gap-x-4">
      <div class="min-w-3xs max-w-xs">
        <input
          type="search"
          id="search"
          class="w-full bg-white px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          placeholder="Search by MSISDN / Wallet"
        />
      </div>

      <div class="flex items-center justify-end gap-x-4">
        <section>
          <mat-icon
            class="material-icons-outlined !text-gray-600"
            fontIcon="notifications"
            matBadge="7"
            [matBadgeHidden]="false"
          />
        </section>
        <hr class="rotate-90 w-6 border border-gray-200" />
        <section class="flex items-center gap-x-3">
          <div class="relative flex items-center gap-x-3 cursor-pointer">
            <img
              ngSrc="/media/profile.jpg"
              alt="user image"
              width="60"
              height="60"
              class="w-10 h-10 aspect-square object-cover rounded-lg"
            />

            <span
              class="absolute bottom-0 right-0 h-2 w-2 bg-green-500 rounded-full"
            ></span>
          </div>
        </section>
      </div>
    </nav>
  `,
  styles: `
        :host{
            width: 100%;
        }
    `,
  imports: [NgOptimizedImage, MatBadgeModule, MatIcon],
})
export class DesktopNavComponent {
  private readonly route = inject(ActivatedRoute);
  readonly pageTitle = inject(Router).events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => this.route.snapshot.firstChild?.data?.['title'])
  );
  readonly initialTitle = signal<string>(
    this.route.snapshot.firstChild?.data?.['title']
  );
  readonly AppPath = AppPaths;
  readonly AccountPath = AccountPaths;
}
