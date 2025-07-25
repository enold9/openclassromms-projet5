const reponse = await fetch('http://localhost:5173/logements.json')
const logements = await reponse.json()
import styled from 'styled-components'

const Image = styled.img`
  width: 300px;
`

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
`

function Logements(){
    return(
            <List>
                {logements.map((logement,i)=>
                    <li key={i}><Image src={logement.cover}/>{logement.title}</li>
                )}
            </List>
    )
}


export default Logements 