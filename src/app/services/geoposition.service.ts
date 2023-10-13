import {Injectable} from "@angular/core";

import {BehaviorSubject, Observable, Subject} from "rxjs";

import {SimpleCoordsInterface} from "../interfaces/simple-coords.interface";

@Injectable({
  providedIn: 'root'
})
export class GeoPositionService {

  get isLocating$(): Observable<boolean> {
    return this.isLocatingSubject.asObservable();
  }

  get positionCoordinates$(): Observable<SimpleCoordsInterface> {
    return this.positionCoordinatesSubject.asObservable();
  }

  readonly defaultPosition: SimpleCoordsInterface = {
    latitude: 38.889805,
    longitude: -77.009056
  };

  private isLocatingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private positionCoordinatesSubject: Subject<SimpleCoordsInterface> = new Subject<SimpleCoordsInterface>();

  private isNavigatorAccessible: Geolocation = navigator.geolocation;

  initGeoPosition(): void {

    if (!this.isNavigatorAccessible) {
      throw new Error('Device or browser does not support geolocation API');
    }

    this.isLocatingSubject.next(true);

    navigator.geolocation.getCurrentPosition(
        this.successGeolocationPosition,
        this.errorGeolocationPosition,
        { enableHighAccuracy: false, maximumAge: Infinity, timeout: Infinity }
    );
  }

  private successGeolocationPosition = (position: GeolocationPosition): void => {
    this.isLocatingSubject.next(false);
    this.positionCoordinatesSubject.next(position.coords as SimpleCoordsInterface);
  }

  private errorGeolocationPosition = (positionError: GeolocationPositionError): void => {
    this.isLocatingSubject.next(false);
    this.positionCoordinatesSubject.next(this.defaultPosition);
  }
}
