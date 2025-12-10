import { heroes, Owner, type Hero } from "../data/heroes.data"


const getHeroesById = (id: number): Hero | undefined => {

  const hero = heroes.find((hero) => {
    return hero.id === id
  });

  // if (!hero) {
  //   throw new Error(`Hero with id ${id} not found`)
  // }

  return hero;
}

// console.log(getHeroesById(7))


export const getHeroesByOwner = (owner: Owner): Hero[] => {

  const heroByOwner: Hero[] = heroes.filter((hero) => hero.owner === owner);

  return heroByOwner;

}