import Hero from '@/components/hero';
import ShowsContainer from '@/components/shows-container';
import { siteConfig } from '@/configs/site';
import MovieService from '@/services/MovieService';
import AnimeService from '@/services/MovieService/AnimeService';
import { env } from '@/env.mjs';
import { homeRequest } from '@/constain/MovieContains';
import { animeHomeRequests } from '@/constain/AnimeContains';

export const revalidate = 3600;

export default async function Home() {
  const h1 = `${siteConfig.name} Home`;
  const animeSite = env.NEXT_PUBLIC_ANIME_SITE;
  const allShows = animeSite
    ? await AnimeService.getShowsAnime(animeHomeRequests)
    : await MovieService.getShows(homeRequest);
  return (
    <>
      <h1 className="hidden">{h1}</h1>
      <Hero shows={allShows[0].shows} />
      <ShowsContainer shows={allShows} />
    </>
  );
}
