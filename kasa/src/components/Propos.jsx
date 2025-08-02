import { useState } from "react"

function Propos({propos, description}){
    const [active, setActive] = useState(false)

    return(
        <li>
            <div className="propos">
                {propos}<input  type="checkbox" 
                                onClick={() => setActive(!active)} 
                                class="fa-solid fa-chevron-up"/>
            </div>
            <div className={`description ${active ? "description-open" : "description-closed"}`}>
                {description}
            </div>
        </li>
    )
}

export default Propos