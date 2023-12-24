import { useAppDispatch } from "../app/hooks";
import { DEFAULT_TIMEOUT_ALERT } from "../constants";
import { resetAlert, setAlert } from "../features/alertSlice";

const useAlert = () => {
  const dispatch = useAppDispatch();
  const showAlert = (
    message: string,
    timeout: number = DEFAULT_TIMEOUT_ALERT
  ): void => {
    dispatch(setAlert(message));
    setTimeout(() => {
      dispatch(resetAlert());
    }, timeout);
  };

  return showAlert;
};

useAlert.displayName = "useAlert";
export default useAlert;
