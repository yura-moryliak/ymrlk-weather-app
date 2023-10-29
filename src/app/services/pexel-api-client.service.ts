import { Injectable } from "@angular/core";

import {createClient, Photo} from "pexels";

import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class PexelAPIClientService {

  readonly mockedPhoto: Photo = {
    "id": 207129,
    "width": 2988,
    "height": 5312,
    "url": "https://www.pexels.com/photo/grayscale-photography-of-man-sitting-beside-wall-207129/",
    "photographer": "Pixabay",
    "photographer_url": "https://www.pexels.com/@pixabay",
    "photographer_id": '2659',
    "avg_color": "#3F3F3F",
    "src": {
      "original": "https://images.pexels.com/photos/207129/pexels-photo-207129.jpeg",
      "large2x": "https://images.pexels.com/photos/207129/pexels-photo-207129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/207129/pexels-photo-207129.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/207129/pexels-photo-207129.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/207129/pexels-photo-207129.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/207129/pexels-photo-207129.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/207129/pexels-photo-207129.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/207129/pexels-photo-207129.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Grayscale Photography of Man Sitting Beside Wall"
  }

  cachedPhotos: Photo[] = [];

  get pexelClient(): any {
    return this.client;
  }

  private client!: any;

  initClient(): void {
    // TODO somehow need to load process.env.PEXEL.API_KEY;
    this.client = createClient(environment.pexel.apiKey);
  }

}
