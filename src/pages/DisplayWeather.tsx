import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { DEFAULT_CITY } from "../constants";
import { IAlertState, IWeatherState } from "../types";

import { Alert, ProgressBarLoader } from "../partials";

import useAlert from "../helper/useAlert";
import {
  WeatherHeader,
  WeatherRecents,
  WeatherSwitchDay,
  WeatherSwitchTemp,
} from "../components/weather";

import { WeatherCard } from "../components/weather/cards";
import { Search } from "../components";
import {
  RESET as RESET_WEATHER_STATE,
  getWeatherData,
} from "../features/weatherSlice";

const DisplayWeather = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const showAlert = useAlert();

  const { message: alertMsg } = useAppSelector<IAlertState>(
    (state) => state.alert
  );
  const { data, isLoading, isError, message } = useAppSelector<IWeatherState>(
    (state) => state.weatherData
  );

  //get default or  weather data when click recent card
  useEffect(() => {
    dispatch(getWeatherData(searchParams.get("query") || DEFAULT_CITY));
  }, [searchParams.get("query")]);

  useEffect(() => {
    if (message && isError) {
      showAlert(message);
      dispatch(RESET_WEATHER_STATE());
    }
  }, [isError, message]);

  return (
    <section className="pb-10 overflow-hidden">
      {isLoading && <ProgressBarLoader isLoading={isLoading} />}
      <div className="2xl:container mx-auto px-2 md:px-0 pb-10 ">
        <WeatherHeader title="Hotlify" />
        <div className="flex flex-col md:flex-row md:items-center mt-12 ">
          <WeatherSwitchTemp />
          <WeatherSwitchDay />
        </div>
        <Search />
        {data && <WeatherCard data={data} />}
        <WeatherRecents />
      </div>

      {alertMsg && (
        <Alert
          message={alertMsg}
          onClose={() => {
            dispatch(RESET_WEATHER_STATE());
          }}
        />
      )}
    </section>
  );
};

DisplayWeather.displayName = "DisplayWeather";
export default DisplayWeather;
