<<<<<<< HEAD
import LogoTipo from '../../../assets/logo.png';
import './NavBar.css';
function NavBar() {
    return (
            <div className="fondo">
                <h1 className="logo"><img src={LogoTipo}/></h1>
                <ul className="navbar">
                    <li className="categoria"><a href="">Trajes</a></li>
                    <li className="categoria"><a href="">Telas</a></li>
                    <li className="categoria"><a href="">Accesorios</a></li>
                    <li className="categoria"><a href="">Contacto</a></li>
                </ul>
            </div>

    )
}

=======
import LogoTipo from '../../../assets/logo.png';
import './NavBar.css';
function NavBar() {
    return (
            <div className="fondo">
                <h1 className="logo"><img src={LogoTipo}/></h1>
                <ul className="navbar">
                    <li className="categoria"><a href="">Trajes</a></li>
                    <li className="categoria"><a href="">Telas</a></li>
                    <li className="categoria"><a href="">Accesorios</a></li>
                    <li className="categoria"><a href="">Contacto</a></li>
                </ul>
            </div>

    )
}

>>>>>>> 646e5945c2a3efe623d922f997ed6c270e0bcfe7
export default NavBar;