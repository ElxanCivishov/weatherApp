import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { IWeatherData } from "../../../types";

interface WeatherProps {
  data: IWeatherData;
}

const WeatherRecentCard: FC<WeatherProps> = ({ data }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const fahrenheit = Math.round(data.main.temp * 1.8 - 459.67);
  const celsius = Math.round(data.main.temp - 273.15);

  const handleClickRecent = (name: string) => {
    searchParams.set("query", name);
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <div
      onClick={() => handleClickRecent(data.name)}
      className="h-60 w-full bg-gradient-2 rounded-t-[2rem]  relative  hover:-translate-y-2 transition-all duration-200 select-none cursor-pointer"
    >
      <div className="w-full  flex flex-col justify-between py-4 h-full">
        <div className="py-3 mx-1 w-full text-center">
          <span className="font-medium leading-normal text-xl  text-white">
            {data.name}
          </span>
        </div>
        <div className="flex items-center justify-center">
          <div className="z-20 w-24 h-16 ">
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full text-center z-10 ">
          <span className="font-light leading-normal text-3xl text-white">
            {searchParams.get("temp") ? fahrenheit + " °F" : celsius + " °C"}
          </span>
        </div>
        <div className="bg-gradient-3  backdrop-blur-md w-full h-28 shadow-md  z-[1] rounded-[25px] absolute bottom-0 right-0 left-0"></div>
      </div>
    </div>
  );
};

WeatherRecentCard.displayName = "WeatherRecentCard";
export default WeatherRecentCard;
