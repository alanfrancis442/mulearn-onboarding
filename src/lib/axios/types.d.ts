export interface ApiResponse<T> {
  hasError: boolean;
  statusCode: number;
  message: string;
  response: T;
}
