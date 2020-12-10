import LogoTipo from '../../../assets/logo.png';
import cart from '../../../assets/cart.png';
import './NavBar.css';
function NavBar({action}) {
    return (
            <div className="fondo">
                <h1 className="logo"><img src={LogoTipo}/></h1>
                <ul className="navbar">
                    <li className="categoria"><button className="carrito" onClick={action}><img className="carritoImg" src={cart}/></button></li>
                    <li className="categoria"><a href="">Trajes</a></li>
                    <li className="categoria"><a href="">Telas</a></li>
                    <li className="categoria"><a href="">Accesorios</a></li>
                    <li className="categoria"><a href="">Contacto</a></li>
                </ul>
            </div>

    )
}
export default NavBar;