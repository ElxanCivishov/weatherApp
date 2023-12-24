import { FC } from "react";
import { Meta } from ".";

interface ProductsFetchingErrorProps {
  error: string;
  resetErrorBoundary?: () => void;
}

const ErrorPage: FC<ProductsFetchingErrorProps> = ({
  error,
  resetErrorBoundary,
}) => {
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
            {resetErrorBoundary && (
              <div className="flex items-center justify-center">
                <button
                  onClick={() => resetErrorBoundary()}
                  className="p-2 text-xs md:text-base md:p-3 font-medium text-center rounded-full no-underline bg-colorBlack hover:bg-white text-white hover:text-zinc-800 border-0 w-40 md:w-48"
                >
                  Reset page
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
