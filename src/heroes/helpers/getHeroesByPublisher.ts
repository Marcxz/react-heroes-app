

import { heroes } from "../data/heroes";

const getHeroesbyPublisher = (publisher: string) => {
    const validPublishers: Array<string> = ['DC Comics', 'Marvel Comics'];
    if (! validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`)
    }

    return heroes.filter((hero:any) => hero.publisher === publisher);
}

export {
    getHeroesbyPublisher
}