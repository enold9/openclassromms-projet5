import Propos from "../components/Propos"
// Import direct du fichier JSON depuis src/data/
import proposData from '../data/Apropos.json'

function Apropos(){
    return(
        <div>
            <div className="title title__propos"></div>
            <ul className="about">
                {proposData.map((x, i)=>(
                    <Propos key={i} propos={x.title} description={x.text}/>
                ))}
            </ul>
        </div>
    )
}

export default Apropos