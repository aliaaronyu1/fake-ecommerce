import { useEffect, useRef } from "react"
import ShoeMenu from "../../components/shoemenu/shoemenu.component"
import Shoes from '../../shoe_data.json'

const Shop = () => {
    const hasPushedPageView = useRef(false);

    useEffect(() => {
        if (!hasPushedPageView.current) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "page_view",
                page_title: "Shoe Gallery",
                page_location: window.location.href,
                page_path: window.location.pathname
            });
        }
        hasPushedPageView.current = true;
    }, [])

    return (
        <div>
            <h1>Shoe Gallery</h1>
            <ShoeMenu Shoes={Shoes} />
        </div>

    )
}
export default Shop