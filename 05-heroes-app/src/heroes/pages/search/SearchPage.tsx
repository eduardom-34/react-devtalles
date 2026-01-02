import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de heroes"
        description="Discover, explore, and manage your favorite superheroes and villains" />


      {/* Stats dashboard */}
      <HeroStats />

      {/* Filter and searcg */}
      <SearchControls />

    </>



  )
}


export default SearchPage;
