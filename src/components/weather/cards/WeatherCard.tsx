import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import locationSvg from "../../../assets/images/icon _location_.svg";
import temperatureSvg from "../../../assets/images/icon _temperature_.svg";
import { IWeatherData } from "../../../types";
import {
  WEATHER_DATE_TABS_QUERY_KEY,
  WEATHER_TEMPERATURE_QUERY_KEY,
  dateTabs,
} from "../../../constants";
import { convertDateTimeAgo } from "../../../helper/useDateFns";
import { addDays } from "date-fns";

interface WeatherProps {
  data: IWeatherData;
}

const WeatherCard: FC<WeatherProps> = ({ data }) => {
  const [searchParams] = useSearchParams();

  // A new request can be sent when the temperature measurement unit changes. But since I think this is an unnecessary request, I converted the current value from kelvin to celsius and fahrenheit
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  const dateTabqueryValue = Number(
    searchParams.get(WEATHER_DATE_TABS_QUERY_KEY)
  );
  const activeTab = dateTabs.find(
    (tab) => tab.value === dateTabqueryValue
  )?.value;

  const formattedDate = activeTab
    ? convertDateTimeAgo(addDays(new Date(), 1))
    : convertDateTimeAgo(new Date());

  return (
    <div className="w-full p-1 md:px-10 mt-8  select-none group  overflow-hidden">
      <div className="h-72 md:h-[425px]  w-full  shadow bg-gradient-1 rounded-[32px] px-5 md:px-10 mx-auto  lg:w-[817px]   ">
        <div className="w-full h-full group-hover:scale-105 transition-all duration-300">
          <div className="px-2 md:px-7 py-4 md:py-9 flex flex-col justify-between h-full">
            <div className="flex  flex-wrap items-center justify-between gap-2 max-h-max ">
              <div className="flex items-center gap-1">
                <span className="font-light leading-normal text-sm md:text-2xl lg:text-[30px] text-white">
                  {data.name}
                </span>
                <img
                  src={locationSvg}
                  alt="location"
                  className="w-4 h-4 md:w-8 md:h-8 object-cover"
                />
              </div>

              <span className="font-medium leading-normal text-sm md:text-base lg:text-xl text-white underline whitespace-nowrap">
                {formattedDate}
              </span>
            </div>

            <div className="flex flex-col items-center justify-center  h-full ">
              <div className="flex items-center gap-2 md:gap-6">
                <img
                  src={temperatureSvg}
                  alt="temperature"
                  className="w-4 h-8 md:w-[18px] md:h-[62px] object-contain"
                />
                <span className="font-medium leading-normal text-2xl md:text-5xl lg:text-7xl text-white whitespace-nowrap">
                  {searchParams.get(WEATHER_TEMPERATURE_QUERY_KEY)
                    ? fahrenheit + " °F"
                    : celsius + " °C"}
                </span>
                <div className="z-20 w-10 h-8 md:w-[78px] md:h-[46px]">
                  <img
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                    alt="current_weather_status"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="font-medium text-sm  md:text-base lg:text-xl text-white">
                {data.weather[0].description}
              </span>
            </div>
            <div className="flex items-center justify-between gap-2 max-h-max">
              <div className="flex flex-col">
                <span className="font-medium leading-normal text-sm text-base  lg:text-xl text-white uppercase">
                  Humidity
                </span>
                <span className="font-medium leading-normal  text-sm text-base  lg:text-[22px] text-white">
                  {data.main.humidity}%
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium leading-normal text-sm text-base  lg:text-xl text-white uppercase">
                  WIND
                </span>
                <span className="font-medium leading-normal text-sm text-base  lg:text-[22px] text-white">
                  {data.wind.speed}mph
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WeatherCard.displayName = "WeatherCard";
export default WeatherCard;
