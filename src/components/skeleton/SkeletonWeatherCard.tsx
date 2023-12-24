import { FC } from "react";

const SkeletonWeatherCard: FC = () => {
  return (
    <div className="animate-pulse h-72 md:h-[425px] w-full p-5 md:px-10 lg:w-[817px] bg-gradient-1 shadow rounded-[32px] mt-8 mx-auto select-none group overflow-hidden ">
      <div className="w-full h-full">
        <div className="px-2 md:px-7 py-4 md:py-9 flex flex-col justify-between h-full">
          <div className="flex  flex-wrap items-center justify-between gap-2 max-h-max ">
            <div className="flex items-center gap-1">
              <div className="h-6 w-20 bg-gray-400 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
            </div>
            <div className="h-6 bg-gray-400 rounded-full w-20"></div>
          </div>

          <div className="flex flex-col items-center justify-center  h-full ">
            <div className="flex items-center gap-2 md:gap-6">
              <div className="h-6 w-6  bg-gray-400 rounded "></div>
              <div className="h-6 w-28 bg-gray-400 rounded-full  "></div>
              <div className="h-6 w-6  bg-gray-400 rounded "></div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 max-h-max">
            <div className="flex flex-col items-center gap-2">
              <div className="h-6 w-28 bg-gray-400 rounded-full"></div>
              <div className="h-6 w-6 bg-gray-400 rounded "></div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-6 w-28 bg-gray-400 rounded-full"></div>
              <div className="h-6 w-6 bg-gray-400 rounded "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SkeletonWeatherCard.displayName = "SkeletonWeatherCard";
export default SkeletonWeatherCard;
