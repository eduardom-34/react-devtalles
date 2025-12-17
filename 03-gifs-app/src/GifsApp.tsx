
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from './shared/components/SearchBar';
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {

  const {
    previousTerms,
    gifs,
    handleTermClicked,
    handleSearch,
  } = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto" />

      {/* Search */}
      <SearchBar
        placeholder="Buscar el mejor Gif"
        onQuery={(query: string) => handleSearch(query)}
      />

      {/* PreviousSearches */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />

    </>
  )
}
