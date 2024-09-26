import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const hasPushedPageView = useRef(false);

    useEffect(() => {
        if (!hasPushedPageView.current) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "page_view",
                page_title: "Home",
                page_location: window.location.href,
                page_path: window.location.pathname
            });
        }
        hasPushedPageView.current = true;
    }, [])
    return (
        <div>
            <h1>Welcome</h1>
            <Link to='shop' className="d-flex align-items-start flex-column">
                <img src='https://t4.ftcdn.net/jpg/02/11/11/15/360_F_211111574_VLtzH6ORhebXvnJXjlkAkaUuAftnvmJH.jpg' alt="Shoes" width={500} height={300} />
                Shop Now
            </Link>

        </div>
    )
}

export default Home;