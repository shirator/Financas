import logo from './NuKenzie.svg'
import './styles.css'

export default function Header( {setLoggedIn }) {
    return(
        <header className="header">
            <img src={logo} alt="Nu Kenzie logo" />
            <button className='inicio' onClick={() => setLoggedIn(false)}>Início</button>
        </header>
    )
}