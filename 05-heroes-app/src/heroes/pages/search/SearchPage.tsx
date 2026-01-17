import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { HeroGrid } from "@/heroes/components/HeroGrid";

export const SearchPage = () => {
  return (

    // TODO: useQuery

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

      <HeroGrid heroes={[]} />

    </>



  )
}


export default SearchPage;
