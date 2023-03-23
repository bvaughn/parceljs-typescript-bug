import { createContext } from "react";

export type ErrorBoundaryContextType = {};

export const ErrorBoundaryContext = createContext<ErrorBoundaryContextType | null>(null);