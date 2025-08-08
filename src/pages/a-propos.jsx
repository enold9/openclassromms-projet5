import Propos from "../components/Propos"
const reponse = await fetch('http://localhost:5173/Apropos.json')
const propos = await reponse.json()

function Apropos(){
    
    return(
        <div>
            <div className="title title__propos"></div>
            <ul className="about">
                {propos.map((x, i)=>(
                    <Propos key={i} propos={x.title} description={x.text}/>
                ))}
            </ul>
        </div>
    )
}

export default Apropos