import {WeatherLocationInterface} from "./weather-location.interface";
import {WeatherCurrentInterface} from "./weather-current.interface";
import {WeatherForecastDayInterface} from "./weather-forecast-day.interface";

export interface WeatherInterface {
  location: WeatherLocationInterface;
  current: WeatherCurrentInterface;
  forecast: {
    forecastday: WeatherForecastDayInterface[];
  }
}
