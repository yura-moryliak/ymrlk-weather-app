import { Injectable } from '@angular/core';

import {createClient} from 'pexels';

import {environment} from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PexelAPIClientService {

  get pexelClient(): any {
    return this.client;
  }

  private client!: any;

  initClient(): void {
    // TODO somehow need to load process.env.PEXEL.API_KEY;
    this.client = createClient(environment.pexel.apiKey);
  }

}
