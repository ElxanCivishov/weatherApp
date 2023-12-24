import { FC, useEffect, useState } from "react";

const ProgressBarLoader: FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    let interval: any;

    if (!isLoading) {
      interval = setInterval(() => {
        if (width >= 100) {
          setWidth(0);
        } else {
          setWidth((prev) => prev + 20);
        }
      }, 20);
    } else {
      setWidth(100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [width, isLoading]);

  const progressBarStyle: React.CSSProperties = {
    width: `${width}%`,
    transition: "width 0.5s linear",
  };

  return (
    <div className="w-full z-60 fixed top-0 max-w-screen overflow-hidden bg-transparent rounded-full h-1">
      <div
        className="bg-colorPrimary h-1 rounded-full w-32 transition-all duration-100"
        style={progressBarStyle}
      ></div>
    </div>
  );
};

ProgressBarLoader.displayName = "ProgressBarLoader";
export default ProgressBarLoader;
