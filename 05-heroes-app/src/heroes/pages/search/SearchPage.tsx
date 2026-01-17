import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action";

export const SearchPage = () => {

  const [searchParams] = useSearchParams();


  const name = searchParams.get('name') ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ['search', { name }],
    queryFn: () => searchHeroesAction({ name }),
    staleTime: 1000 * 60 * 5,
  })

  return (
    <>
      <CustomJumbotron
        title="Busqueda de heroes"
        description="Discover, explore, and manage your favorite superheroes and villains" />

      <CustomBreadcrumbs currentPage="Buscador de Héroes"
        breadCrumbs={
          [
            // { label: 'Home', to: '/' },
            // { label: 'Home2', to: '/' },
            // { label: 'Home3', to: '/' },
          ]
        }
      />
      {/* Stats dashboard */}
      <HeroStats />

      {/* Filter and searcg */}
      <SearchControls />

      <HeroGrid heroes={heroes} />

    </>



  )
}


export default SearchPage;
