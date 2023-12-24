import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <main className="min-h-screen !max-w-screen">
      <Outlet />
    </main>
  );
};

Layout.displayName = "Layout";
export default Layout;
