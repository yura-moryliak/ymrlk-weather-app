import {APP_INITIALIZER, ApplicationConfig, isDevMode} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideServiceWorker} from '@angular/service-worker';

import {PexelAPIClientService} from './services/pexel-api-client.service';
import {pexelAPIClientInitializerFactory} from './factories/pexel-api-client-initializer.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    {
        provide: APP_INITIALIZER,
        useFactory: pexelAPIClientInitializerFactory,
        deps: [PexelAPIClientService],
        multi: true
    },
    provideHttpClient(),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
  ]
};
