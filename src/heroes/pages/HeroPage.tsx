import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

const HeroPage = () => {
  const urlParams = useParams();
  const {heroId} = urlParams;
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  }

  const hero = useMemo( () => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <>
        <h1>Hero {heroId}</h1>
        <div className="row mt-5 animate__animated animate__fadeInLeft">
            <div className="col-4">
                <img className="img-thumbnail "
                    src={`/assets/${hero.id}.jpg`} alt={hero.superhero} />
            </div>
            <div className="col-8">
              <h3>{hero.superhero}</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> <b>Alter ego: </b> {hero.alter_ego}</li>
                <li className="list-group-item"> <b>Publisher: </b> {hero.publisher}</li>
                <li className="list-group-item"> <b>First appearance: </b> {hero.first_appearance}</li>
              </ul>

              <h5 className="mt-3">Characters</h5>
              <p>{hero.characters}</p>

              <button className="btn btn-outline-primary" onClick={onNavigateBack}>Regresar</button>
            </div>
        </div>
    </>
  )
}

export { HeroPage }
