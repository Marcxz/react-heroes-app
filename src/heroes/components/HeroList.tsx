import React from 'react'
import { getHeroesbyPublisher } from '../helpers'

const HeroList = ({ publisher } : { publisher: string }) => {
  const heroes: Array<any>= getHeroesbyPublisher(publisher) 
  return (
    <ul>
        {heroes.map((hero: any) => {
            return (
                <li key={hero.id}> {hero.superhero} </li>
            )
        })}
    </ul>
  )
}

export default HeroList
