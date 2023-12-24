import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { ErrorBoundary } from "./utils";

const App: FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <AppRoutes />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
