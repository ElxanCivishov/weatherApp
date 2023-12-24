import { FC } from "react";
import { WeatherSwitchDay } from "./weather";

import cloudSvg from "../../assets/images/Cloud.svg";
import sunSvg from "../../assets/images/Sun.svg";
import {
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  Typography,
  styled,
} from "@mui/material";
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
const WeatherHeader: FC = () => {
  return (
    <header className="relative z-30 h-auto w-full">
      <FormGroup>
        <FormControlLabel
          control={<Switch id="switch" color="success" />}
          label=""
        />
      </FormGroup>

      <div className="absolute z-20 left-[5px] top-[20px] w-[57px] h-[34px]">
        <img src={cloudSvg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute z-10  left-[25px] top-[7px] bottom-[7px] w-[41px] h-[41px]">
        <img src={sunSvg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="pl-[64px] pt-[31px] h-[93px] ">
        <h2 className="text-[69px] font-normal  leading-normal text-white">
          Hotlify
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:items-center mt-12 w-full">
        <div className="flex items-center justify-center gap-[27px] max-w-max pl-[15px]">
          <span className="text-[30px] font-light  leading-normal text-white">
            °C
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="switch"
              value=""
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-colorDarkGreen"></div>
          </label>
          <span className="text-[30px] font-light  leading-normal text-white">
            °F
          </span>
        </div>
        <WeatherSwitchDay />
      </div>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Off</Typography>
        <AntSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
        <Typography>On</Typography>
      </Stack>
    </header>
  );
};

export default WeatherHeader;
