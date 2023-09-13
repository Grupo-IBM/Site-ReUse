import mapa from "../../assets/Mapa.png"
import Insta from "../../assets/image.png"
import Linkedin from "../../assets/linkedin.png"

// estilos
import '../../index.css'
import "./rodape.scss"
const Rodape = () => {
  const list = [
    {
      img: Insta,
      nome: '@Reuse'
    },
    {
      img: Linkedin,
      nome: '@Reuse'
    },
    {
      img: Linkedin,
      nome: '@CyberWave'
    }
  ];

  return (
    <div className="tudo">
      <footer>
      <div className="footer-container">
        <div className="mapa">
          <img src={mapa} alt="Mapa" />
        </div>
        <div className="redes">
          <p>Acompanhe nas redes sociais</p>
          <ul>
            {list.map((rede, i) => (
              <li key={i}>
                <img src={rede.img} alt={rede.nome} style={{ height: '45px' }} />
                <a href="#">{rede.nome}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="contato">
          <p>©reUse™ - Uma iniciativa CyberWave.
                    2023, todos os direitos reservados. 
                    
                    00+ 00 0000-0000
                    Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP, 01311-000
                    
                Compromisso com a Sustentabilidade: Reduzindo, Reutilizando e Reciclando para um Futuro Melhor.</p>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Rodape;
