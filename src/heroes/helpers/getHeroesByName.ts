import { heroes } from "../data/heroes"
import { IHeroCard } from "../interfaces"

export const getHeroesByName = (name: any) => {
    if (name.length === 0) return [];
    name = name.toLowerCase().trim();
    return heroes.filter((hero: IHeroCard) => hero.superhero.toLowerCase().trim().includes(name));
}