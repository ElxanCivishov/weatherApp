import { FC } from "react";
import { useAppDispatch } from "../app/hooks";
import { setAlert } from "../features/alertSlice";
import { IAlert } from "../types";

import errorPng from "../assets/images/error_outline.png";

const Alert: FC<IAlert> = ({ message, onClose }) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setAlert(""));
    if (onClose) onClose();
  };

  return (
    <div className="fixed top-8 right-8 z-40">
      <div className="flex items-center justify-between gap-3 rounded bg-colorLightPink px-4 py-2 w-full md:w-[448px]">
        <div className="flex items-center gap-3">
          <img
            src={errorPng}
            alt="error_icon"
            className="flex-shrink-0 w-6 h-6"
          />
          <span className="font-medium text-colorTextError text-base md:text-xl leading-6 tracking-wide">
            {message.charAt(0).toUpperCase() + message.slice(1)}
          </span>
        </div>
        <span
          className="font-medium text-red-600 text-base md:text-xl cursor-pointer"
          onClick={() => handleClose()}
        >
          x
        </span>
      </div>
    </div>
  );
};

Alert.displayName = "Alert";
export default Alert;
