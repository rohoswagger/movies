import {
  AnimeFormatType,
  AnimeRequestType,
  type AnimeShowRequest,
  AnimeSort,
  AnimeType,
  SeasonType,
} from '@/enums/anime-request-type';
import { Genre } from '@/enums/genre';
import { RequestType, type ShowRequest } from '@/enums/request-type';
import { MediaType } from '@/types';

export const homeRequest: ShowRequest[] = [
  {
    title: 'Trending Now',
    req: { requestType: RequestType.TRENDING, mediaType: MediaType.ALL },
    visible: true,
  },
  {
    title: 'Netflix TV Shows',
    req: { requestType: RequestType.NETFLIX, mediaType: MediaType.TV },
    visible: true,
  },
  {
    title: 'Popular TV Shows',
    req: {
      requestType: RequestType.TOP_RATED,
      mediaType: MediaType.TV,
      genre: Genre.TV_MOVIE,
    },
    visible: true,
  },
  {
    title: 'Korean Movies',
    req: {
      requestType: RequestType.KOREAN,
      mediaType: MediaType.MOVIE,
      genre: Genre.THRILLER,
    },
    visible: true,
  },
  {
    title: 'Comedy Movies',
    req: {
      requestType: RequestType.GENRE,
      mediaType: MediaType.MOVIE,
      genre: Genre.COMEDY,
    },
    visible: true,
  },
  {
    title: 'Action Movies',
    req: {
      requestType: RequestType.GENRE,
      mediaType: MediaType.MOVIE,
      genre: Genre.ACTION,
    },
    visible: true,
  },
  {
    title: 'Romance Movies',
    req: {
      requestType: RequestType.GENRE,
      mediaType: MediaType.MOVIE,
      genre: Genre.ROMANCE,
    },
    visible: true,
  },
  {
    title: 'Scary Movies',
    req: {
      requestType: RequestType.GENRE,
      mediaType: MediaType.MOVIE,
      genre: Genre.THRILLER,
    },
    visible: true,
  },
];
