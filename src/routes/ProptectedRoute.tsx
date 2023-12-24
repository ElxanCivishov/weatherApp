import React, { FC } from "react";
import { Route } from "react-router-dom";

interface ProtectedRouteProps {
  path: string;
  layout: React.ElementType;
  element: React.ElementType;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  path,
  layout: Layout,
  element: Element,
}) => {
  return (
    <Route path={path} element={<Layout />}>
      <Route index element={<Element />} />
    </Route>
  );
};

export default ProtectedRoute;
