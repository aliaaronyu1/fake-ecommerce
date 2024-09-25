import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <div className="d-flex flex-row">
                <Link to='/' className="mr-3">
                    <h2>Home</h2>
                </Link>
                <Link to='shop' className="mr-3">
                    <h2>Shop</h2>
                </Link>
                <Link to='cart' className="mr-3">
                    <h2>Cart</h2>
                </Link>
            </div>

            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Navigation;