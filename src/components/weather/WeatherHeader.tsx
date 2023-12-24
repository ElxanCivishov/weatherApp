import { FC, memo } from "react";
import cloudSvg from "../../assets/images/Cloud.svg";
import sunSvg from "../../assets/images/Sun.svg";

interface WeatherHeaderProps {
  title: string;
}

const WeatherHeader: FC<WeatherHeaderProps> = memo(({ title }) => {
  return (
    <header className="z-30 h-auto w-full relative">
      <div className="absolute z-20 left-1 top-5 w-14 h-8">
        <img
          src={cloudSvg}
          alt="cloud"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute z-10 left-6 top-2 bottom-2 w-10 h-10">
        <img src={sunSvg} alt="sun" className="w-full h-full object-cover" />
      </div>
      <div className="pl-16 pt-8 h-24">
        <h2 className="text-5xl md:text-6xl  lg:text-[69px] font-normal  leading-normal text-white">
          {title}
        </h2>
      </div>
    </header>
  );
});

WeatherHeader.displayName = "WeatherHeader";
export default WeatherHeader;
