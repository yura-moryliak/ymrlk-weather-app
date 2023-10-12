import {PexelAPIClientService} from "../services/pexel-api-client.service";

export function pexelAPIClientInitializerFactory(pexelClientService: PexelAPIClientService) {
  pexelClientService.initClient();
  return () => null;
}
