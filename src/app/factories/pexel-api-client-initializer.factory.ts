import {PexelAPIClientService} from '../services/pexel-api-client.service';

export function pexelAPIClientInitializerFactory(pexelClientService: PexelAPIClientService) {
  pexelClientService.initClient();

  pexelClientService.pexelClient.photos.search({ query: 'dark', per_page: 5 })
    .then((response: any) => pexelClientService.cachedPhotos = response?.photos);

  return () => null;
}
