import './WidgetCart.css';

const WidgetCart = ({show, action}) => {
    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <p>Carrito Widget</p>
            <button onClick={action}>Acá se va a cerrar cuando lo pueda ver</button>
        </div>
    )
}

export default WidgetCart;