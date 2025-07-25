import { useState } from "react"

function Propos({propos, description}){
    const [active, setActive] = useState(false)


    return(
        <li>{propos}<span onClick={() => setActive(!active)}> flèche </span>
            {!active ? (
                <div></div>
                ) : ( 
                <div>{description}</div>
            )}
        </li>
    )
}

export default Propos