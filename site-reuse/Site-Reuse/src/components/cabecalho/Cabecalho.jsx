import logo from "../../assets/reuse-logo 1.png"
import { LogoStyled } from "./cabecalho.styled"
import { HeaderStyled } from "./cabecalho.styled"
const Cabecalho = () => {
  return (
    <>
    <HeaderStyled>
        <LogoStyled src={logo}style={{width:'250px'}}></LogoStyled>
    </HeaderStyled>
    </>
  )
}

export default Cabecalho