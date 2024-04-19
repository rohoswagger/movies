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

export const TvShowRequest: ShowRequest[] = [
  {
    title: 'Trending Now',
    req: { requestType: RequestType.TRENDING, mediaType: MediaType.TV },
    visible: true,
  },
  {
    title: 'Netflix TV Shows',
    req: { requestType: RequestType.NETFLIX, mediaType: MediaType.TV },
    visible: true,
  },
  {
    title: 'Popular',
    req: {
      requestType: RequestType.TOP_RATED,
      mediaType: MediaType.TV,
      genre: Genre.FAMILY,
    },
    visible: true,
  },
  {
    title: 'Comedy TV Shows',
    req: {
      requestType: RequestType.GENRE,
      mediaType: MediaType.TV,
      genre: Genre.COMEDY,
    },
    visible: true,
  },
  {
    title: 'Action TV Shows',
    req: {
      requestType: RequestType.GENRE,
      mediaType: MediaType.TV,
      genre: Genre.ACTION_ADVENTURE,
    },
    visible: true,
  },
  {
    title: 'Drama TV Shows',
    req: {
      requestType: RequestType.GENRE,
      mediaType: MediaType.TV,
      genre: Genre.DRAMA,
    },
    visible: true,
  },
  {
    title: 'Scary TV Shows',
    req: {
      requestType: RequestType.GENRE,
      mediaType: MediaType.TV,
      genre: Genre.THRILLER,
    },
    visible: true,
  },
];

export const MovieRequest: ShowRequest[] = [
  {
    title: 'Trending Now',
    req: { requestType: RequestType.TRENDING, mediaType: MediaType.MOVIE },
    visible: true,
  },
  {
    title: 'Netflix Movies',
    req: { requestType: RequestType.NETFLIX, mediaType: MediaType.MOVIE },
    visible: true,
  },
  {
    title: 'Popular',
    req: { requestType: RequestType.POPULAR, mediaType: MediaType.MOVIE },
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

export const PopularRequest: ShowRequest[] = [
  {
    title: 'Netflix',
    req: { requestType: RequestType.NETFLIX, mediaType: MediaType.TV },
    visible: false,
  },
  {
    title: 'Trending TV Shows',
    req: { requestType: RequestType.TRENDING, mediaType: MediaType.TV },
    visible: true,
  },
  {
    title: 'Trending Movies',
    req: { requestType: RequestType.TRENDING, mediaType: MediaType.MOVIE },
    visible: true,
  },
  {
    title: 'Top Rated TV Shows',
    req: { requestType: RequestType.TOP_RATED, mediaType: MediaType.TV },
    visible: true,
  },
  {
    title: 'Top Rated Movies',
    req: { requestType: RequestType.TOP_RATED, mediaType: MediaType.MOVIE },
    visible: true,
  },
];
