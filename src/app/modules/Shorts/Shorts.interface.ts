// Shorts.interface: Module file for the Shorts.interface functionality.
export interface ShortVideo {
  id: number;
  videoUrl: string;
  title: string;
  tags: string[];
}

export interface GetShortsOptions {
  page?: number;
  limit?: number;
  search?: string;
  tag?: string;
}
