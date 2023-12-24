import { FC, useEffect, useState } from "react";
import { IWeatherData } from "../../types";
import { RECENT_WEATHER_STORAGE_KEY } from "../../constants";
// import { WeatherRecentCard } from "./cards";
import { getStorageItem } from "../../helper/getLocalStorage";

const WeatherRecents: FC = () => {
  const [recents, setRecents] = useState<IWeatherData[]>([]);

  useEffect(() => {
    const weathers = getStorageItem({
      key: RECENT_WEATHER_STORAGE_KEY,
      value: [],
    });
    setRecents([...weathers]);
  }, []);

  console.log(recents);

  // Maybe the names wanted to be repeated so I give you a new date together with id
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 px-10 mt-12">
      {/* {recents.map((data) => (
        <WeatherRecentCard key={data.id + Date.now()} data={data} />
      ))} */}
    </div>
  );
};

WeatherRecents.displayName = "WeatherRecents";
export default WeatherRecents;
