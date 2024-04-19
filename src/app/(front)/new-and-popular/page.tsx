import Hero from '@/components/hero';
import ShowsContainer from '@/components/shows-container';
import { siteConfig } from '@/configs/site';
import { AnimePopularRequest } from '@/constain/AnimeContains';
import { PopularRequest } from '@/constain/MovieContains';
import { env } from '@/env.mjs';
import MovieService from '@/services/MovieService';
import AnimeService from '@/services/MovieService/AnimeService';

export const revalidate = 3600;

export default async function NewAndPopularPage() {
  const h1 = `${siteConfig.name} New And Popular`;
  const animeSite = env.NEXT_PUBLIC_ANIME_SITE;
  const allShows = animeSite
    ? await AnimeService.getShowsAnime(AnimePopularRequest)
    : await MovieService.getShows(PopularRequest);

  return (
    <>
      <h1 className="hidden">{h1}</h1>
      <Hero shows={allShows[0].shows} />
      <ShowsContainer shows={allShows} />
    </>
  );
}
