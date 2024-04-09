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
