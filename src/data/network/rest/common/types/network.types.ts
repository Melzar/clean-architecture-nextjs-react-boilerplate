import { AxiosInstance, Method } from 'axios';

export type FetchFunctionInput = {
  method: Method;
  data: Record<string, unknown>;
  options?: Record<string, unknown>;
  headers?: Record<string, unknown>;
};

export type FetchFunction = (
  input?: FetchFunctionInput
) => Promise<AxiosInstance>;

export type ResourceDefinition = {
  [key: string]: (...params: unknown[]) => { path: string; method: Method };
};

export type ApiResponse<D> = {
  data: D;
};
