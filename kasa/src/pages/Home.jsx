import Logements from "../components/Logements"
import landscape from "../assets/images/landscape1.jpg"
import styled from 'styled-components'

const Title = styled.h1`
    text-align: center;
`
const Landscape = styled.div`
    width: 80%;
    padding: 100px;
    background-image: url("${landscape}") center;
`


function Home(){

    // position relitive pour l'image pas en background
    return(
        <div>
            <Landscape>
                <Title>Chez vous, partout et ailleurs</Title>       
            </Landscape>
            <Logements />
        </div>
    )
}

export default Home