import { FC } from "react";
import { Meta } from ".";
import { IErrorBoundary } from "../types";

const ErrorPage: FC<IErrorBoundary> = ({ error }) => {
  return (
    <>
      <Meta title="Error" />
      <section className="container h-screen p-4 flex items-center justify-center">
        <div className="bg-colorPrimary p-5 flex items-center justify-center w-full  md:w-96  md:h-96 rounded-lg">
          <div className="w-full md:max-w-2xl flex flex-col items-center gap-5 text-center px-4">
            <img src="/images/errorpage.png" alt="" />
            <p className="text-sm text-white font-semibold ">
              Samething want wrong! Try again.
            </p>
            <p className="text-sm text-white font-semibold ">
              <b className="me-2 text-base"> Error: </b> {error}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
