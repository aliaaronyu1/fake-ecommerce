import { useContext } from "react";
import { ShoeContext } from "../../context/shoeproduct.context";
import { Link } from "react-router-dom";

const ShoeItem = ({ shoes }) => {
    const { setShoeProduct } = useContext(ShoeContext)
    const { imageUrl, name, price, id } = shoes

    const handleAddCart = () => {
        setShoeProduct((prevShoeData) => {
            const existingShoe = prevShoeData.find((item) => item.id === shoes.id)

            if (existingShoe) {
                return prevShoeData.map((item) =>
                    item.id === shoes.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            else {
                return [...prevShoeData, { ...shoes, quantity: 1 }]
            }
        })
    }
    return (
        <div className="mx-5 my-4">
            <Link to={`shoes/${id}`}>
                <h5>{name}</h5>
                <div>
                    <img width={250} height={250} src={imageUrl} alt="shoe" />
                </div>
            </Link>
            <div className="d-flex flex-row">
                <h6>
                    ${price}
                </h6>
                <button className="btn btn-success ml-auto" onClick={handleAddCart}>Add to Cart</button>
            </div>

        </div >

    )
}
export default ShoeItem;