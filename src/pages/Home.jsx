import Logements from "../components/Logements"


function Home(){

    return(
        <div>
            <div className="title title__home">
                <h1 className="title-text">Chez vous, partout et ailleurs</h1>
            </div>
            <Logements />
        </div>
    )
}

export default Home
