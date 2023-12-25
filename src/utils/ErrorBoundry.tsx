import React from "react";
import { ErrorPage } from "../partials";

export class ErrorBoundary extends React.Component<any, any> {
  state: {
    hasError: boolean;
    error?: Error;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Error crashed!");
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage error={this.state.error?.message || ""} />;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
