import { shorts } from "../../db/shorts";
import { GetShortsOptions, ShortVideo } from "./Shorts.interface";

//add new shorts
const addNewShorts = (short: Omit<ShortVideo, "id">) => {
  const newShort: ShortVideo = {
    id: shorts.length + 1,
    videoUrl: short.videoUrl,
    title: short.title,
    tags: short.tags,
  };

  shorts.push(newShort);

  return newShort;
};

//  get all shorts
const getAllShorts = (
  options: GetShortsOptions = {}
): {
  meta: { page: number; limit: number; total: number; totalPage: number };
  data: ShortVideo[];
} => {
  const { page = 1, limit = 10, search = "", tag = "" } = options;

  let result = shorts;

  // Step 1: Search by title
  if (search) {
    const searchLower = search.toLowerCase();
    result = result.filter((short) =>
      short.title.toLowerCase().includes(searchLower)
    );
  }

  // Step 2: Filter by tag
  if (tag) {
    const tagLower = tag.toLowerCase();
    result = result.filter((short) =>
      short.tags.some((t) => t.toLowerCase() === tagLower)
    );
  }

  const total = result.length;
  const totalPage = Math.ceil(total / limit);
  const currentPage = Math.max(1, page);
  const start = (currentPage - 1) * limit;
  const end = start + limit;

  const data = result.slice(start, end);

  return {
    meta: {
      page: currentPage,
      limit,
      total,
      totalPage,
    },
    data,
  };
};

export const ShortsService = {
  addNewShorts,
  getAllShorts,
};
