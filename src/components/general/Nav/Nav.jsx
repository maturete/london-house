import './Nav.css';
import LogoTipo from '../../../assets/logo.png';
import NavCart from '../NavCart/NavCart';

function Nav({titulo, action}) {
    const productCant = 0;

    return (
        <nav>
            <div className="container">
            <h1 className="logo"><img src={LogoTipo}/></h1>

                <ul>
                <li className="categoria"><a href="">Trajes</a></li>
                    <li className="categoria"><a href="">Telas</a></li>
                    <li className="categoria"><a href="">Accesorios</a></li>
                    <li className="categoria"><a href="">Contacto</a></li>
                    {
                    !productCant && <NavCart action={action} productCant={productCant} />
                    }
                </ul>
                
                
            </div>
        </nav>
    )
}

export default Nav;