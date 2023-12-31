import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    console.log(_);
    return { hasError: true };
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught Error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <div>Something went wrong!</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
