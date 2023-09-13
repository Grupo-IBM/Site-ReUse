import './usuario.scss'
import cupom from "../../assets/cupom.png"

const usuario = () => {
  return (
        <>
            <main className='container-main'>
                <div className="banner">
                    <div className="user-container">
                        <section className="cupom">
                            <h3>Bem vindo!!</h3>
                            <img src={cupom}></img>
                        </section>
                        <section className="pin">
                            <div className="pin-box">
                                <h2>Seu pin é: </h2>
                                <div className='pin-number'>
                                   12345 
                                </div>
                                <h3 className='H3-PIN'>Seu histórico de deposíto:</h3>
                                <div className='info'>
                                <p>01/02/2023 - São Paulo, SP | Unidade 35
                                6Kg totais despejados -  1236pts</p>
                                
                                <p>27/01/2023 - São Paulo, SP | Unidade 35
                                7Kg Totais despejados - 3433pts
                                </p>
                                <a href="#">Ler mais...</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
  )
}

export default usuario