import { useContext, useEffect, useState } from "react";
import { ShoeContext } from "../../context/shoeproduct.context";
import { Link } from "react-router-dom";

const ShoeItem = ({ shoes }) => {
    const { setShoeProduct } = useContext(ShoeContext)
    const { imageUrl, name, price, id } = shoes
    const [ recentlyAddedShoe, setRecentlyAddedShoe ] = useState(null)

    const handleAddCart = () => {
        let newQuantity = 1
        setShoeProduct((prevShoeData) => {
            const existingShoe = prevShoeData.find((item) => item.id === shoes.id)

            if (existingShoe) {
                newQuantity = existingShoe.quantity + 1
                setRecentlyAddedShoe({ ...existingShoe, quantity: newQuantity})
                return prevShoeData.map((item) =>
                    item.id === shoes.id ? { ...item, quantity: newQuantity } : item
                )
            }
            else {
                setRecentlyAddedShoe({ ...shoes, quantity: newQuantity})
                return [...prevShoeData, { ...shoes, quantity: newQuantity }]
            }
        })


    }
    useEffect(() => {
        if (recentlyAddedShoe) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "add_to_cart",
                product_id: recentlyAddedShoe.id,
                product_name: recentlyAddedShoe.name,
                price: recentlyAddedShoe.price,
                quantity: recentlyAddedShoe.quantity
            });
        }
    }, [recentlyAddedShoe])

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