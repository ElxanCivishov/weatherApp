import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <main className="bg-colorBlack min-h-screen w-screen pb-10 overflow-x-hidden">
      <Outlet />
    </main>
  );
};

Layout.displayName = "Layout";
export default Layout;
