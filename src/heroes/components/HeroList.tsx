import React, { useMemo } from 'react'
import { getHeroesbyPublisher } from '../helpers'
import { IHeroCard } from '../interfaces'
import { HeroCard } from './HeroCard'

const HeroList = ({ publisher } : { publisher: string }) => {
  const heroes: Array<IHeroCard>= useMemo(() => getHeroesbyPublisher(publisher), [publisher]);
   
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {heroes.map((hero: IHeroCard) => {
            return (
                <HeroCard key={hero.id} hero={hero} />
            )
        })}
    </div>
  )
}

export { 
    HeroList

}
