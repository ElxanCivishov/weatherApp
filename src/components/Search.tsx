import { FC, ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import SearchSvg from "../assets/images/icon _search_.svg";
import { Alert } from "../partials";
import useAlert from "../helper/useAlert";
import { IAlertState } from "../types";
import { getAndSetRecentWeatherData } from "../helper/getAndSetRecentWeatherData";
import {
  getWeatherData,
  getWeatherDataWeekDays,
} from "../features/weatherSlice";
import { useSearchParams } from "react-router-dom";
import { WEATHER_DATE_TABS_QUERY_KEY } from "../constants";

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const showAlert = useAlert();
  const [searchParams] = useSearchParams();
  const [city, setCity] = useState<string>("");
  const { message: alertMsg } = useAppSelector<IAlertState>(
    (state) => state.alert
  );

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value.trim());
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!city) {
      showAlert("Enter city or country name");
      return;
    }

    try {
      const isWeekDays = Boolean(searchParams.get(WEATHER_DATE_TABS_QUERY_KEY));
      const data = isWeekDays
        ? await dispatch(getWeatherDataWeekDays(city))
        : await dispatch(getWeatherData(city));

      if (data.payload.cod === 200) {
        getAndSetRecentWeatherData(data.payload);
      }

      setCity("");
    } catch (error) {
      showAlert(String(error));
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex items-center justify-between gap-1 py-1 bg-colorLight rounded mt-5 md:mt-11 pl-8 pr-[10px] w-full md:w-[711px] h-14 md:h-[66px] mx-auto">
        <input
          className="w-full focus:outline-none text-colorTextBlack font-light leading-normal bg-transparent border-none text-2xl md:text-[30px]"
          value={city}
          onChange={changeHandler}
          placeholder="Enter city or country name..."
        />
        <button type="submit" className="outline-none border-none p-2">
          <img
            src={SearchSvg}
            alt=""
            className="w-8 h-8 md:w-[45px] md:h-[45px]  object-contain"
          />
        </button>
      </div>
      {alertMsg && <Alert message={alertMsg} />}
    </form>
  );
};

Search.displayName = "Search";
export default Search;
