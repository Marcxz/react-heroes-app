import React, { useEffect, useState } from 'react'
import { HeroCard } from '../components'
import { useForm } from '../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'

import queryString from 'query-string'
import { getHeroesByName } from '../helpers/getHeroesByName'
import { IHeroCard } from '../interfaces'

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query: queryString.ParsedQuery<string> = queryString.parse(location.search);
  const { q = ''} = query;
  
  const {formState, onInputChange} = useForm({
    searchText: '',
  })
  
  const [heroes, setHeroes] = useState(Array<IHeroCard>());

  const onSearchSubmit = (event: any) => {
    event.preventDefault();
    if (formState.searchText.trim().length < 1 ) return;

    navigate(`?q=${formState.searchText}`)
  }

  useEffect(() => {setHeroes(getHeroesByName(q))}, [q])
  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text"
                  placeholder='Search a hero' 
                  className='form-control'
                  name='searchText'
                  autoComplete='off'
                  value={formState.searchText}
                  onChange={onInputChange}
                  />
            <button className="btn btn-outline-primary mt-1"> 
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            q === '' && (
            <div className="alert alert-primary">
            Search a hero
            </div>
            )
          }
          
          {
            heroes.length === 0 && ( <div className="alert alert-danger">
                                    No hero with <b>{q}</b>
                                  </div>)
          }
         
          {
            heroes.map((hero: IHeroCard) => {
             return (
              <HeroCard key={hero.id} hero={hero} />
             ) 
            })
          }

        </div>
      </div>
      
    </>
  )
}

export { 
    SearchPage
}