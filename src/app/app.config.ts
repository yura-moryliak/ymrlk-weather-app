import {APP_INITIALIZER, ApplicationConfig} from "@angular/core";
import {provideHttpClient} from "@angular/common/http";
import {provideRouter} from "@angular/router";

import {routes} from "./app.routes";

import {PexelAPIClientService} from "./services/pexel-api-client.service";
import {pexelAPIClientInitializerFactory} from "./factories/pexel-api-client-initializer.factory";

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: pexelAPIClientInitializerFactory,
      deps: [PexelAPIClientService],
      multi: true
    },
    provideHttpClient(),
    provideRouter(routes)
  ]
};
