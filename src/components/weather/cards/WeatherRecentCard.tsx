import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { IWeatherData } from "../../../types";
import {
  WEATHER_TEMPERATURE_FAHRENHEIT,
  WEATHER_TEMPERATURE_QUERY_KEY,
} from "../../../constants";

interface WeatherProps {
  data: IWeatherData;
}

const WeatherRecentCard: FC<WeatherProps> = ({ data }) => {
  const [searchParams] = useSearchParams();
  const fahrenheit = Math.round(data.main.temp * 1.8 - 459.67);
  const celsius = Math.round(data.main.temp - 273.15);

  const weatherTemp =
    searchParams.get(WEATHER_TEMPERATURE_QUERY_KEY) ===
    WEATHER_TEMPERATURE_FAHRENHEIT
      ? fahrenheit + " °F"
      : celsius + " °C";

  return (
    <div className="h-40 md:h-52 lg:h-60 w-full bg-gradient-2 rounded-2xl md:rounded-[2rem]  relative  hover:-translate-y-2 transition-all duration-200 select-none ">
      <div className="w-full  flex flex-col justify-between py-4 h-full">
        <div className="py-1 lg:py-3 px-1 w-full text-center">
          <span className="font-medium leading-normal text-sm md:text-base lg:text-xl  text-white">
            {data.name}
          </span>
        </div>
        <div className="flex items-center justify-center">
          <div className="z-20 w-16 h-12 md:w-24 md:h-16 ">
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
              alt="weather_temp_icon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full text-center z-10 ">
          <span className="font-light leading-normal text-xl md:text-3xl text-white">
            {weatherTemp}
          </span>
        </div>
        <div className="bg-gradient-3  backdrop-blur-md w-full h-20 md:h-28 shadow-md  z-[1] rounded-[25px] absolute bottom-0 right-0 left-0"></div>
      </div>
    </div>
  );
};

WeatherRecentCard.displayName = "WeatherRecentCard";
export default WeatherRecentCard;
