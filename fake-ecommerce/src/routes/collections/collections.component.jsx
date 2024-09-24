import ShoeMenu from "../../components/shoemenu/shoemenu.component"
import Shoes from '../../shoe_data.json'

const Collections = () => {
    

    return (
        <div>
            <h1>Shoe Gallery</h1>
            <ShoeMenu Shoes={Shoes}/>
        </div>
    
    )
}
export default Collections