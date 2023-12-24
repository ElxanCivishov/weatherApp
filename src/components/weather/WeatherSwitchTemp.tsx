import { FC, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import {
  WEATHER_TEMPERATURE_FAHRENHEIT,
  WEATHER_TEMPERATURE_QUERY_KEY,
} from "../../constants";

const WeatherSwitchTemp: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeTemp = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      searchParams.set(
        WEATHER_TEMPERATURE_QUERY_KEY,
        WEATHER_TEMPERATURE_FAHRENHEIT
      );
    } else {
      searchParams.delete(WEATHER_TEMPERATURE_QUERY_KEY);
    }
    setSearchParams(searchParams, {
      replace: true,
    });
  };

  return (
    <div className="flex items-center justify-center gap-[27px] max-w-max pl-[15px]">
      <span className="text-[30px] font-light  leading-normal text-white">
        °C
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={!!searchParams.get(WEATHER_TEMPERATURE_QUERY_KEY)}
          className="sr-only peer"
          onChange={(e) => handleChangeTemp(e)}
        />
        <div className="w-16 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-10 rtl:peer-checked:after:-translate-x-10 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-colorDarkGreen"></div>
      </label>
      <span className="text-[30px] font-light  leading-normal text-white">
        °F
      </span>
    </div>
  );
};

WeatherSwitchTemp.displayName = "WeatherSwitchTemp";
export default WeatherSwitchTemp;
