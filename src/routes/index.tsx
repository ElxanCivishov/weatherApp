import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, NotFound } from "../partials";
import { DisplayWeather } from "../pages";
import { ROUTES } from "./consts";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.WEATHER.PATH} element={<Layout />}>
        <Route index element={<DisplayWeather />} />
      </Route>
      <Route path={ROUTES.NOTFOUND.PATH} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
