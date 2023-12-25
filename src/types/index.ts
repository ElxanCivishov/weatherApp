export interface IMeta {
  title: string;
}

export interface IErrorBoundary {
  error: string;
}

export interface IWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface IWeatherClouds {
  all: number;
}

export interface IWeatherCoord {
  lon: number;
  lat: number;
}

export interface IWeatherMain {
  feels_like: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface IWeatherSys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface IWeatherWind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface IWeatherData {
  base: string;
  clouds: IWeatherClouds;
  cod: number;
  coord: IWeatherCoord;
  dt: number;
  id: number;
  main: IWeatherMain;
  name: string;
  sys: IWeatherSys;
  timezone: number;
  visibility: number;
  weather: IWeather[];
  wind: IWeatherWind;
}

export interface IWeatherError {
  cod: string;
  message: string;
}

export interface IWeatherState {
  data?: IWeatherData;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message?: string;
}

export interface IWeatherSwitchDay {
  field: string;
  value?: string | number;
}

export interface IAlertState {
  message?: string;
}

export interface IAlert {
  message: string;
  onClose?: () => void;
}

export interface IStorageOptions<T> {
  key: string;
  value: T;
}

export interface IDateTabs {
  id: number;
  title: string;
  value: string;
}
