export interface GenericResInterface<T> {
  message: string;
  code: number;
  data: T;
}

export interface PaginatedResInterface<T> {
  data: T[];
  totalCount: number;
  currentCount: number;
  currentPage: number;
  page: number;
  limit: number;
}

export type StatusState = "pending" | "loading" | "success" | "error";
