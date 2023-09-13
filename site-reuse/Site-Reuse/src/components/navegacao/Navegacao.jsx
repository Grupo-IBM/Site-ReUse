
import { Link } from "react-router-dom"; // Importe o componente Link se você estiver usando React Router
import logo from "../../assets/logo-cyberwave.png";

// ESTILOS
import { ContainerStyled } from "./Navegacao.style";
import { NavegacaoStyle } from "./Navegacao.style";
import { Logostyled } from "./Navegacao.style";
import { UlStyled } from "./Navegacao.style";
import { LIstyled } from "./Navegacao.style";
import { AncoraStyled } from "./Navegacao.style";
import "./Botao.scss";

const Navegacao = () => {
  return (
    <>
    <header>
        <ContainerStyled>
          <NavegacaoStyle>
            <Link to="/">
              <Logostyled src={logo} alt="Logo"></Logostyled>
            </Link>
            <UlStyled className="navbar-items">
              <LIstyled className="Lista-navbar">
                <AncoraStyled>
                <Link to="/Cadastro" className="Link">
                  Cadastro
                </Link>
                </AncoraStyled>
              </LIstyled>
              <LIstyled>
                <AncoraStyled>
                <Link to="/Login" className="estilo-entrar">
                    login
                </Link>
                </AncoraStyled>
              </LIstyled>
            </UlStyled>
          </NavegacaoStyle>
        </ContainerStyled>
      </header>
    </>
  );
};

export default Navegacao;
