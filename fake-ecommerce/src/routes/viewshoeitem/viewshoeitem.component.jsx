import { useParams } from "react-router-dom";
import shoe_data from '../../shoe_data.json'
import { useContext, useEffect, useRef, useState } from "react";
import { ShoeContext } from "../../context/shoeproduct.context";

const ViewShoeItem = () => {
    const { id } = useParams();
    const listShoes = shoe_data.find((shoe) => shoe.id === id);
    const { setShoeProduct } = useContext(ShoeContext)
    const [recentlyAddedShoe, setRecentlyAddedShoe] = useState(null)
    const hasPushedPageView = useRef(false);

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

    useEffect(() => {
        if (!hasPushedPageView.current) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "view_item",
                product_id: listShoes.id,
                product_name: listShoes.name,
                price: listShoes.price,
            });
        }
        hasPushedPageView.current = true
    }, [])

    const handleAddCart = () => {
        let newQuantity = 1
        setShoeProduct((prevShoeData) => {
            const existingShoe = prevShoeData.find((item) => item.id === listShoes.id)

            if (existingShoe) {
                newQuantity = existingShoe.quantity + 1
                setRecentlyAddedShoe({ ...existingShoe, quantity: newQuantity })
                return prevShoeData.map((item) =>
                    item.id === listShoes.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            else {
                setRecentlyAddedShoe({ ...listShoes, quantity: newQuantity })
                return [...prevShoeData, { ...listShoes, quantity: 1 }]
            }
        })
    }

    return (
        <div>
            <h1>
                {listShoes.name}
            </h1>
            <div className="d-flex flex-row">
                <div className="mx-3">
                    <img src={listShoes.imageUrl} alt={listShoes.name} width={600} height={600} />
                    <h3>${listShoes.price}</h3>
                </div>
                <div className="mx-3">
                    <h3>Description: </h3>
                    <p>{listShoes.description}</p>
                    <button className="btn btn-success" onClick={handleAddCart}>Add to Cart</button>
                </div>
            </div>

        </div>
    )
}
export default ViewShoeItem;