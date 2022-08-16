import "./styles.css"
import logo from "./NuKenzie.svg"
import decor from "./InitialPageDecor.svg"

export default function LandingPage({ setLoggedIn }) {
    return(
        <div className="landingPage">
            <div class="ladingPage__info">
                <img src={logo} alt="Logotipo da Nu Kenzie" />
                    <h3>Centralize o controle das suas finanças</h3>
                    <small>de forma rápida e segura</small>
                    <button class="mainButton mainButton--primary" onClick={() => setLoggedIn(true)}>Iniciar</button>
                </div>
            <div class="landingPage__icon">
                <img src={decor} alt="Ícone" />
            </div>
        </div>
    )
}