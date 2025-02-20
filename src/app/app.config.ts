import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideToastr} from 'ngx-toastr';
import {provideAnimations} from '@angular/platform-browser/animations';
import {AuthInterceptor} from './İnterceptors/auth.interceptor';
import {provideCharts,withDefaultRegisterables} from 'ng2-charts';
import {BarController, Colors, Legend} from 'chart.js';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';




export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideToastr({
      positionClass: 'toast-bottom-right',
      closeButton: true,
      progressBar: true,

    }),
  provideAnimations(),
    provideHttpClient(withInterceptors([AuthInterceptor])),//Angular17 ve üstü kullanım için interceptor ekleme

    provideCharts({ registerables: [BarController, Legend, Colors] }),


  ]
};
