import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de heroes"
        description="Discover, explore, and manage your favorite superheroes and villains" />


      {/* Stats dashboard */}
      <HeroStats />

    </>



  )
}


export default SearchPage;
