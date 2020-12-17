import {useState} from 'react';
import './ProductCard.css';
import camisaSale from '../../../assets/camisa.jpg';

const ProductCard = ({titulo, precio}) => {
    const [productCant, setProductCant] = useState(1);

    const handleClickResta = () => {
        if(productCant > 1) {
            setProductCant(productCant - 1);
        }
    }

    const onAdd = () => {
        alert(`Agregaste ${productCant} productos al carrito`);
    }

    return (
        <article className="productCard">
            <div className="productTitle">
                <h3>{titulo}</h3>
            </div>
            <div>
                <img src={camisaSale} alt="productos en oferta"/>
                <p>${precio}</p>
                <div className="productCant">
                    <button 
                        disabled={productCant === 1 ? 'disabled' : null } 
                        onClick={handleClickResta}
                    >
                        -
                    </button>
                    <input type="text" value={productCant} readOnly/>
                    <button onClick={() => setProductCant(productCant + 1)}>+</button>
                </div>
                <button className="sumarCarrito" onClick={onAdd}>Sumar a mi carrito</button>
            </div>
        </article>
    )
}

export default ProductCard;