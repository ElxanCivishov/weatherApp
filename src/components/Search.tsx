import { FC, ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import SearchSvg from "../assets/images/icon _search_.svg";
import { Alert } from "../partials";
import useAlert from "../helper/useAlert";
import { IAlertState } from "../types";
import { recentWeatherData } from "../helper/recentWeatherData";
import { getWeatherData } from "../features/weatherSlice";

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const showAlert = useAlert();

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
      showAlert("Please enter a city or country name");
    } else {
      const data = await dispatch(getWeatherData(city));
      if (data.payload.cod === 200) {
        recentWeatherData(data.payload);
      }
      setCity("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex items-center justify-between gap-1 p-1 bg-colorLight rounded mt-11 pl-[33px] pr-[10px] w-full md:w-[711px] h-[66px] mx-auto">
        <input
          className="w-full focus:outline-none text-colorTextBlack font-light leading-normal bg-transparent border-none text-[30px]"
          value={city}
          onChange={changeHandler}
          placeholder="Enter city or country name..."
        />
        <button type="submit" className="outline-none border-0 p-2">
          <img
            src={SearchSvg}
            alt=""
            className="w-[45px] h-[45px]  object-contain"
          />
        </button>
      </div>
      {alertMsg && <Alert message={alertMsg} />}
    </form>
  );
};

Search.displayName = "Search";
export default Search;
