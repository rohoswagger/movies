import {
  AnimeFormatType,
  AnimeRequestType,
  type AnimeShowRequest,
  AnimeSort,
  AnimeType,
  SeasonType,
} from '@/enums/anime-request-type';
import { Genre } from '@/enums/genre';
import { RequestType, ShowRequest } from '@/enums/request-type';
import { MediaType } from '@/types';

export const animeHomeRequests: AnimeShowRequest[] = [
  {
    title: 'Trending Now',
    req: {
      type: AnimeType.ANIME,
      sort: [AnimeSort.TRENDING_DESC, AnimeSort.POPULARITY_DESC],
      page: 1,
    },
    visible: true,
  },
  {
    title: 'POPULAR THIS SEASON',
    req: {
      type: AnimeType.ANIME,
      sort: [AnimeSort.POPULARITY_DESC],
      seasonYear: '2024',
      season: SeasonType.SPRING,
      page: 1,
    },
    visible: true,
  },
  {
    title: 'UPCOMING NEXT SEASON',
    req: {
      type: AnimeType.ANIME,
      sort: [AnimeSort.POPULARITY_DESC],
      seasonYear: '2024',
      season: SeasonType.SUMMER,
      page: 1,
    },
    visible: true,
  },
  {
    title: 'ALL TIME POPULAR',
    req: {
      type: AnimeType.ANIME,
      sort: [AnimeSort.POPULARITY_DESC],
      page: 1,
    },
    visible: true,
  },
];

export const AnimeTVShowRequest: AnimeShowRequest[] = [
  {
    title: 'Trending Now',
    req: {
      type: AnimeType.ANIME,
      format: [AnimeFormatType.TV_SHOW, AnimeFormatType.TV_SHORT],
      sort: [AnimeSort.TRENDING_DESC, AnimeSort.POPULARITY_DESC],
      page: 1,
    },
    visible: true,
  },
  {
    title: 'POPULAR THIS SEASON',
    req: {
      type: AnimeType.ANIME,
      format: [AnimeFormatType.TV_SHOW, AnimeFormatType.TV_SHORT],
      sort: [AnimeSort.POPULARITY_DESC],
      seasonYear: '2024',
      season: SeasonType.SPRING,
      page: 1,
    },
    visible: true,
  },
  {
    title: 'UPCOMING NEXT SEASON',
    req: {
      type: AnimeType.ANIME,
      format: [AnimeFormatType.TV_SHOW, AnimeFormatType.TV_SHORT],
      sort: [AnimeSort.POPULARITY_DESC],
      seasonYear: '2024',
      season: SeasonType.SUMMER,
      page: 1,
    },
    visible: true,
  },
  {
    title: 'ALL TIME POPULAR',
    req: {
      type: AnimeType.ANIME,
      format: [AnimeFormatType.TV_SHOW, AnimeFormatType.TV_SHORT],
      sort: [AnimeSort.POPULARITY_DESC],
      page: 1,
    },
    visible: true,
  },
];

export const AnimeMovieRequest: AnimeShowRequest[] = [
  {
    title: 'Trending Now',
    req: {
      type: AnimeType.ANIME,
      format: [AnimeFormatType.MOVIE],
      sort: [AnimeSort.TRENDING_DESC, AnimeSort.POPULARITY_DESC],
      page: 1,
    },
    visible: true,
  },
  {
    title: 'POPULAR THIS SEASON',
    req: {
      type: AnimeType.ANIME,
      format: [AnimeFormatType.MOVIE],
      sort: [AnimeSort.POPULARITY_DESC],
      seasonYear: '2024',
      season: SeasonType.SPRING,
      page: 1,
    },
    visible: true,
  },
  {
    title: 'UPCOMING NEXT SEASON',
    req: {
      type: AnimeType.ANIME,
      format: [AnimeFormatType.MOVIE],
      sort: [AnimeSort.POPULARITY_DESC],
      seasonYear: '2024',
      season: SeasonType.SUMMER,
      page: 1,
    },
    visible: true,
  },
  {
    title: 'ALL TIME POPULAR',
    req: {
      type: AnimeType.ANIME,
      format: [AnimeFormatType.MOVIE],
      sort: [AnimeSort.POPULARITY_DESC],
      page: 1,
    },
    visible: true,
  },
];

export const AnimePopularRequest: AnimeShowRequest[] = [
  {
    title: 'Trending Movie',
    req: {
      type: AnimeType.ANIME,
      format: [AnimeFormatType.MOVIE],
      sort: [AnimeSort.TRENDING_DESC, AnimeSort.POPULARITY_DESC],
      page: 1,
    },
    visible: true,
  },
  {
    title: 'Trending TV Show',
    req: {
      type: AnimeType.ANIME,
      format: [AnimeFormatType.TV_SHOW, AnimeFormatType.TV_SHORT],
      sort: [AnimeSort.TRENDING_DESC, AnimeSort.POPULARITY_DESC],
      page: 1,
    },
    visible: true,
  },
  {
    title: 'Trending OVA',
    req: {
      type: AnimeType.ANIME,
      format: [AnimeFormatType.OVA],
      sort: [AnimeSort.TRENDING_DESC, AnimeSort.POPULARITY_DESC],
      page: 1,
    },
    visible: true,
  },
  {
    title: 'Trending ONA',
    req: {
      type: AnimeType.ANIME,
      format: [AnimeFormatType.ONA],
      sort: [AnimeSort.TRENDING_DESC, AnimeSort.POPULARITY_DESC],
      page: 1,
    },
    visible: true,
  },
  {
    title: 'Trending Special',
    req: {
      type: AnimeType.ANIME,
      format: [AnimeFormatType.SPECIAL],
      sort: [AnimeSort.TRENDING_DESC, AnimeSort.POPULARITY_DESC],
      page: 1,
    },
    visible: true,
  },
];
