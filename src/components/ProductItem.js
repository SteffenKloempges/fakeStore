import { Link } from "react-router-dom";

const ProductItem = (props) => {
    console.log(props)
    return (
        <div>
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            <Link to={'/product/' + props.id} state={props.allProducts}>View more</Link>
        </div>
    );
}

export default ProductItem;