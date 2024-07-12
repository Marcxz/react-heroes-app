import { heroes } from "../data/heroes"

export const getHeroById = (id: any) => {
    return heroes.find( hero => hero.id === id);
}