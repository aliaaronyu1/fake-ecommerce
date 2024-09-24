import { useContext } from "react";
import { ShoeContext } from "../../context/shoeproduct.context";

const ShoeItem = ({ shoes }) => {
    const { shoeProduct, setShoeProduct } = useContext(ShoeContext)
    const { imageUrl, name } = shoes

    const handleAddCart = () => {
        setShoeProduct([...shoeProduct, shoes])
    }
    return (
        <div>
            <p>{name}</p>
            <div>
                <img width={250} height={250} src={imageUrl}/>
            </div>
            <button className="btn btn-success" onClick={handleAddCart}>Add to Cart</button>
        </div>
    )
}
export default ShoeItem;