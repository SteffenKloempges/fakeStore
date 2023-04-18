import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json)
            })
    }, [])

    // console.log(products)

    return (
        <section>
            {products.map((elt) => {
                return (
                    // <div>
                    //     <img src={elt.image} alt="" />
                    //     <h2>{elt.title}</h2>
                    // </div>
                    <ProductItem
                        image={elt.image}
                        title={elt.title}
                        key={elt.id}
                        id={elt.id}
                        allProducts={elt}
                    />
                )
            })}
        </section>
    );
}

export default ProductList;