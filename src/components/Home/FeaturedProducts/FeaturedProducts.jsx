import {useState, useEffect} from 'react';
import ProductCard from '../../general/ProductCard/ProductCard';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    const [items, setItems] = useState([]);
    const products = [
        {
            id: 1,
            titulo: 'Camisa',
            precio: 2750,
        },
        {
            id: 2,
            titulo: 'Pantalón',
            precio: 6600,
        },
        {
            id: 3,
            titulo: 'Camisa Rallada',
            precio: 1200,
        },
        {
            id: 4,
            titulo: 'Zapatos',
            precio: 12458,
        },
        {
            id: 5,
            titulo: 'Zapatos',
            precio: 12458,
        },
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 5000)
    })

    const getProducstFromDB = async () => {
        try {
            const result = await getProducts;
            setItems(result);
        } catch(error) {
            alert('El producto no se encuentra en stock');
        }
    }

    useEffect(() => {
        getProducstFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // useEffect(() => {
    //     getProducts.then(rta => setItems(rta));
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
        <section className="featuredProducts">
            <div className="container">
                {
                    items.length ?
                    <>
                        <h2>productos en liquidación</h2>

                        <ul>
                            {
                                items.map((item, index) => (
                                    <li key={index}>
                                        <ProductCard 
                                            titulo={item.titulo} 
                                            precio={item.precio} 
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </> :
                    <p className="cargando">Cargando ofertas</p>
                }
            </div>
        </section>
    )
}

export default FeaturedProducts;