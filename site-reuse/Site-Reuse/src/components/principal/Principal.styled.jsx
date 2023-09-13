import styled from "styled-components"
import '../../index.css'
import fundo from "../../assets/home-fundo.png"


export const Paragrafo = styled.p`
color: var(--white);
align-items: center;
text-align: center;
font-weight: bold;
text-shadow: var(--black) 2px 2px 2px;
font-size: 32px;
`

export const Container = styled.div`
background-image: url(${fundo});
background-size: cover;
background-position: center;
padding: 10rem 0;
`