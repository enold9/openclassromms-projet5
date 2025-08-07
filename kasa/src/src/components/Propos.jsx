import { useState } from "react"

function Propos({propos, description}){
    const [active, setActive] = useState(false)

    return(
        <li>    
            <div className="rolling-text">
                {propos}<input  type="checkbox" 
                                onClick={() => setActive(!active)} 
                                className="fa-solid fa-chevron-up"/>
            </div>
            <div className={`description ${active ? "description-open" : "description-closed"}`}>
                 {Array.isArray(description)
                    ? description.map((e, i) => (
                        <span key={i}>{e}<br /></span>
                    )) : description}
            </div>
        </li>
    )
}

export default Propos