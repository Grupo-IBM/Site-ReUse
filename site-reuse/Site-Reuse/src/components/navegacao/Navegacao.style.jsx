import styled from 'styled-components'
import '../../index.css'


export const ContainerStyled = styled.div`
width: 100%;
height: 150px;
background-color: #fff;
padding: 0 2rem;
border-bottom: 3px solid var( --green-dark);
`
export const NavegacaoStyle = styled.nav`
position: relative;
`

export const Logostyled = styled.img`
width: 140px;
height: 140px;
`

export const UlStyled = styled.ul`
position: absolute;
right: 0;
height: 120px;
line-height: 150px;
margin: 0;
display: inline-block;
`

export const LIstyled = styled.li `
display: inline-block;
color: var(--black);
text-transform: uppercase;
margin-left: 30px;
text-decoration: none;
`

export const AncoraStyled = styled.a`
color:var(--black);
text-decoration: none;
transition: 0.5s;
cursor: pointer
`

export const BtnEntrar = styled.a`
padding: 15px 20px;
background-color: var(--green-light);
border-radius: 5px;
text-decoration: none;
`
export const LinkStyle = styled.link`
text-decoration: none;
`