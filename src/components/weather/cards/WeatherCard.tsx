import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import locationSvg from "../../../assets/images/icon _location_.svg";
import temperatureSvg from "../../../assets/images/icon _temperature_.svg";
import { IWeatherData } from "../../../types";
import { formatDateForTab } from "../../../helper/date";

interface WeatherProps {
  data: IWeatherData;
}

const WeatherCard: FC<WeatherProps> = ({ data }) => {
  const [searchParams] = useSearchParams();

  // A new request can be sent when the temperature measurement unit changes. But since I think this is an unnecessary request, I converted the current value from kelvin to celsius and fahrenheit
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  return (
    <div className="h-[425px] w-full lg:w-[817px] bg-gradient-1 shadow rounded-[32px] mt-[33px] mx-auto select-none hover:scale-105 transition-all duration-300">
      <div className=" px-7 py-9 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between gap-2 max-h-max">
          <div className="flex items-center gap-1">
            <span className="font-light leading-normal text-[30px] text-white">
              {data.name}
            </span>
            <img
              src={locationSvg}
              alt=""
              className="w-[31px] h-[31px] object-cover"
            />
          </div>

          <span className="font-medium leading-normal text-[20px] text-white underline">
            {formatDateForTab(searchParams.get("date") ? 1 : 0)}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center  h-full ">
          <div className="flex items-center gap-6">
            <img
              src={temperatureSvg}
              alt=""
              className="w-[18px] h-[62px] object-contain"
            />
            <span className="font-medium leading-normal text-[70px] text-white">
              {searchParams.get("temp") ? fahrenheit + " °F" : celsius + " °C"}
            </span>
            <div className="z-20 w-[78px] h-[46px]">
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="current_weather_status"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className="font-medium text-xl text-white">
            {data.weather[0].description}
          </span>
        </div>
        <div className="flex items-center justify-between gap-2 max-h-max">
          <div className="flex flex-col">
            <span className="font-medium leading-normal text-[20px] text-white uppercase">
              Humidity
            </span>
            <span className="font-medium leading-normal text-[22px] text-white">
              {data.main.humidity}%
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium leading-normal text-[20px] text-white uppercase">
              WIND
            </span>
            <span className="font-medium leading-normal text-[22px] text-white">
              {data.wind.speed}mph
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

WeatherCard.displayName = "WeatherCard";
export default WeatherCard;
