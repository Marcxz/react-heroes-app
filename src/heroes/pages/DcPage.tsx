import { HeroList } from "../components"
const DcPage = () => {
  return (
    <>
    <div className="container mt-3">
        <h1>Dc Comics</h1>
        <hr />
        <HeroList publisher="DC Comics" />
    </div>
    </>
  )
}

export {
    DcPage
}
