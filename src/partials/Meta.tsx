import { FC } from "react";
import Helmet from "react-helmet";
import { IMeta } from "../types";

const Meta: FC<IMeta> = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  );
};

export default Meta;
