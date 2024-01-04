
export  interface TRequestResponseData<T = unknown> {
  status: string;
  message: string;
  results: number;
  data: T;
}
