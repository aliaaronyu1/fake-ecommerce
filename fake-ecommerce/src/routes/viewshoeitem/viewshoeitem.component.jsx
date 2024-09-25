import { useParams } from "react-router-dom";
import shoe_data from '../../shoe_data.json'
import { useContext } from "react";
import { ShoeContext } from "../../context/shoeproduct.context";

const ViewShoeItem = () => {
    const { id } = useParams();
    const listShoes = shoe_data.find((shoe) => shoe.id === id);
    const { setShoeProduct } = useContext(ShoeContext)

    const handleAddCart = () => {
        setShoeProduct((prevShoeData) => {
            const existingShoe = prevShoeData.find((item) => item.id === listShoes.id)

            if (existingShoe) {
                return prevShoeData.map((item) =>
                    item.id === listShoes.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            else {
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