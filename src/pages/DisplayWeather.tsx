import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { DEFAULT_CITY, WEATHER_DATE_TABS_QUERY_KEY } from "../constants";
import { IAlertState, IWeatherState } from "../types";

import { Alert, Meta, ProgressBarLoader } from "../partials";

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
  getWeatherDataWeekDays,
} from "../features/weatherSlice";
import { useSearchParams } from "react-router-dom";
import { SkeletonWeatherCard } from "../components/skeleton";

const DisplayWeather = () => {
  const dispatch = useAppDispatch();
  const showAlert = useAlert();
  const [searchParams] = useSearchParams();

  const { message: alertMsg } = useAppSelector<IAlertState>(
    (state) => state.alert
  );
  const { data, isLoading, isError, message } = useAppSelector<IWeatherState>(
    (state) => state.weatherData
  );

  useEffect(() => {
    if (searchParams.get(WEATHER_DATE_TABS_QUERY_KEY)) {
      dispatch(getWeatherDataWeekDays(data?.name || DEFAULT_CITY));
    } else {
      dispatch(getWeatherData(data?.name || DEFAULT_CITY));
    }
  }, [searchParams.get(WEATHER_DATE_TABS_QUERY_KEY)]);

  useEffect(() => {
    if (message && isError) {
      showAlert(message);
      dispatch(RESET_WEATHER_STATE());
    }
  }, [isError, message]);

  return (
    <>
      <Meta title="Weather" />
      {isLoading && <ProgressBarLoader isLoading={isLoading} />}
      <section className="bg-colorBlack h-full min-h-screen ">
        <div className="container mx-auto px-5 pb-10">
          <WeatherHeader title="Hotlify" />
          <div className="mt-4 md:mt-12 ">
            <WeatherSwitchTemp />
          </div>
          <div className="flex items-center justify-center  md:-mt-10">
            <WeatherSwitchDay />
          </div>
          <Search />

          {isLoading && !data ? (
            <SkeletonWeatherCard />
          ) : (
            data && <WeatherCard data={data} />
          )}
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
    </>
  );
};

DisplayWeather.displayName = "DisplayWeather";
export default DisplayWeather;
