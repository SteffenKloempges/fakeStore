import { useLocation } from "react-router-dom";

const ProductDetails = () => {

    const location = useLocation();
    console.log(location)

    return (
        <section>
            <h1>{location.state.title}</h1>
            <img src={location.state.image} alt="" />
            <p>{location.state.description}</p>
            <p>{location.state.rating.rate}</p>
            <p>{location.state.rating.count}</p>
        </section>
    );
}

export default ProductDetails;