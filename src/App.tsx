import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

const App: FC = () => {
  return (
    <Router>
      <AppRoutes />;
    </Router>
  );
};

export default App;
