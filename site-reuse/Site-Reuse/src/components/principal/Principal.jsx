// dependecias
import ReuseLogo from "../../assets/reuse-logo 1.png"
// Estilos
import './principal.scss'
import { Container } from "./Principal.styled"
import '../../index.css'
const Principal = () => {
  return (
    <div className="Container">
        <main>
        <Container className="main-banner">
                <div className="logo-container">
                    <img src={ReuseLogo} className="Logo"></img>
                </div>
            <p>Reciclar: a pequena ação que gera ondas gigantes de mudança para o nosso mundo</p>
        </Container>
        </main>
    </div>
  )
}

export default Principal