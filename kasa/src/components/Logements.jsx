const reponse = await fetch('http://localhost:5173/logements.json')
const logements = await reponse.json()

function Logements(){
    return(
            <ul>
                {logements.map((logement,i)=>
                    <li key={i}><img src={logement.cover}/>{logement.title}</li>
                )}
            </ul>
    )
}


export default Logements 