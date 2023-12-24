import { FC, memo } from "react";
import cloudSvg from "../../assets/images/Cloud.svg";
import sunSvg from "../../assets/images/Sun.svg";

interface WeatherHeaderProps {
  title: string;
}

const WeatherHeader: FC<WeatherHeaderProps> = memo(({ title }) => {
  return (
    <header className="relative z-30 h-auto w-full">
      <div className="absolute z-20 left-[5px] top-[20px] w-[57px] h-[34px]">
        <img src={cloudSvg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute z-10 left-[25px] top-[7px] bottom-[7px] w-[41px] h-[41px]">
        <img src={sunSvg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="pl-[64px] pt-[31px] h-[93px] ">
        <h2 className="text-[69px] font-normal  leading-normal text-white">
          {title}
        </h2>
      </div>
    </header>
  );
});

WeatherHeader.displayName = "WeatherHeader";
export default WeatherHeader;
