import {
  Component, EventEmitter, HostListener, inject,
  OnDestroy, OnInit, Output, ViewEncapsulation
} from "@angular/core";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {debounceTime, distinctUntilChanged, Observable, of, Subscription, switchMap} from "rxjs";

import {WeatherAPIService} from "../../../../services/weather-api.service";
import {SearchedPlaceInterface} from "../../../../interfaces/searched-place.interface";

@Component({
  selector: 'ymrlk-searchbar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchbarComponent implements OnInit, OnDestroy {

  @Output() selectedPlace: EventEmitter<SearchedPlaceInterface> = new EventEmitter<SearchedPlaceInterface>();

  @HostListener('document:click')
  onWindowClick(): void {
    if (this.searchedPlacesList && !this.searchedPlacesList.length) {
      return;
    }

    this.clear();
  }

  @HostListener('keydown.escape')
  onEscapeKeydown(): void {
    this.onWindowClick();
  }

  searchbarFormControl: FormControl<string | null> = new FormControl<string | null>('');
  searchedPlacesList: SearchedPlaceInterface[] = [];

  private weatherAPIService: WeatherAPIService = inject(WeatherAPIService);
  private subscriptions: Subscription = new Subscription();

  ngOnInit(): void {
   this.trackSearchedPlaces();
  }

  clear(): void {
    this.searchbarFormControl.reset('');
  }

  selectPlace(place: SearchedPlaceInterface): void {
    this.clear();
    this.selectedPlace.emit(place);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private trackSearchedPlaces(): void {
    const searchedPlaceSubscription: Subscription = this.searchbarFormControl.valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((query: string | null): Observable<SearchedPlaceInterface[]> =>
            query ? this.weatherAPIService.getWeatherSearchedDaysList(query as string)! : of([])
        )
    ).subscribe({
      next: (searchedPlaces: SearchedPlaceInterface[]) =>
          this.searchedPlacesList = (searchedPlaces && searchedPlaces.length) ?
              searchedPlaces :
              [],
      error: (error: any) => console.log('SearchBar: ValueChanges: Error: ', error)
    });

    this.subscriptions.add(searchedPlaceSubscription);
  }
}
