import { FC } from "react";
import { Meta } from ".";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div>
      <Meta title="Not Found Page" />
      <section className="container h-screen p-4">
        <div className="bg-white p-5 flex items-center justify-center w-full h-full rounded-lg">
          <div className="w-full md:max-w-2xl flex flex-col items-center gap-3 text-center px-4">
            <h3 className="text-9xl text-zinc-600 font-semibold">404</h3>
            <h3 className="text-xl text-zinc-600 font-semibold">
              Sorry! Not Found Page.
            </h3>
            <p className="text-sm text-zinc-500 font-semibold ">
              Sorry, we could not find the page you were looking for. We suggest
              you return to the main page.
            </p>
            <div className="flex items-center justify-center">
              <Link
                to="/"
                replace={true}
                className="p-2 text-xs md:text-base md:p-3 font-medium text-center rounded-full no-underline bg-colorBlack hover:bg-colorPrimary text-white hover:text-zinc-800 border-0 w-40 md:w-48"
              >
                Come back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
NotFound.displayName = "NotFound";
export default NotFound;
