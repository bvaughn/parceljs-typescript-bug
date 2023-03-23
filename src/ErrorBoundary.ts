import { Component, createElement, PropsWithChildren } from "react";
import { ErrorBoundaryContext } from "./ErrorBoundaryContext";

export class ErrorBoundary extends Component<PropsWithChildren> {
  render() {
    const { children } = this.props;

    return createElement(
      ErrorBoundaryContext.Provider,
      {
        value: {},
      },
      children
    );
  }
}
