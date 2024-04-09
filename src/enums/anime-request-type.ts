export enum AnimeRequestType {
  TRENDING = 'trending',
  TOP_RATED = 'top_rated',
  NETFLIX = 'netflix',
  POPULAR = 'popular',
  GENRE = 'genre',
  KOREAN = 'korean',
  DEFAULT = 'default',
}

interface Title {
  userPreferred: string;
}

interface CoverImage {
  extraLarge: string;
  large: string;
  color: string;
}

interface StartDate {
  year: number;
  month: number;
  day: number;
}

interface EndDate {
  year: number;
  month: number;
  day: number;
}

interface StudioNode {
  id: number;
  name: string;
}

interface StudioEdge {
  isMain: boolean;
  node: StudioNode;
}

interface Studios {
  edges: StudioEdge[];
}

export interface Media {
  id: number;
  title: Title;
  coverImage: CoverImage;
  startDate: StartDate;
  endDate: EndDate;
  bannerImage: string;
  season: string;
  seasonYear: number;
  description: string;
  type: string;
  format: string;
  status: string;
  episodes: number;
  duration: number;
  genres: string[];
  isAdult: boolean;
  averageScore: number;
  popularity: number;
  studios: Studios;
}

interface PageInfo {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}

interface Page {
  pageInfo: PageInfo;
  media: Media[];
}

interface Data {
  Page: Page;
}

export interface AnilistResponseData {
  data: Data;
}

export enum AnimeType {
  ANIME = 'ANIME',
}

export enum AnimeFormatType {
  TV_SHOW = 'TV',
  TV_SHORT = 'TV_SHORT',
  MOVIE = 'MOVIE',
  SPECIAL = 'SPECIAL',
  OVA = 'OVA',
  ONA = 'ONA',
  MUSIC = 'MUSIC',
}

export enum AnimeSort {
  TRENDING_DESC = 'TRENDING_DESC',
  POPULARITY_DESC = 'POPULARITY_DESC',
}

export enum SeasonType {
  FALL = 'FALL',
  WINTER = 'WINTER',
  SPRING = 'SPRING',
  SUMMER = 'SUMMER',
}

export type AnimeRequest = {
  type: AnimeType;
  format?: AnimeFormatType[];
  year?: string;
  seasonYear?: string;
  season?: SeasonType;
  sort?: AnimeSort[];
  page?: number;
};

export type AnimeShowRequest = {
  title: string;
  req: AnimeRequest;
  visible: boolean;
};
