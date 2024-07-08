import React from 'react'
import HeroList from '../components/HeroList'

const MarvelPage = () => {
  return (
    <>

     <div className="container mt-3">
            <h1>Marvel Page</h1>
            <hr />
            <HeroList publisher='Marvel Comics' />
     </div>
    </>
  )
}

export {
    MarvelPage
}
