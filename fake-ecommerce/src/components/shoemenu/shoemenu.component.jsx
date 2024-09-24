import ShoeItem from "../shoeitem/shoeitem.component";

const ShoeMenu = ({ Shoes }) => {

    return (
        <div className="d-flex flex-wrap">
            {Shoes.map((shoes) => (
                <ShoeItem key={shoes.id} shoes={shoes} />
            ))}
        </div>
    )
}
export default ShoeMenu;