import { Link } from "react-router-dom";
import { IHeroCard } from "../interfaces"


const HeroCard = ( {hero}: {hero: IHeroCard}) => {

  const heroImageUrl = `/assets/${hero.id}.jpg`;

  return (
    <>
      <div className="col">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4 animate__animated animate__fadeIn">
                  <img src={heroImageUrl} alt={hero.superhero} className="card-img" />  
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{hero.superhero}</h5>
                        <p className="card-text">{hero.alter_ego}</p>
                        {hero.alter_ego !== hero.characters && (<p className="card-text">{hero.characters}</p>)}
                        <p className="text-muted">{hero.first_appearance}</p>
                        <Link to={`/hero/${hero.id}`}> Más...</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export {
    HeroCard
}
