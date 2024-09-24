import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link to='/'>
                Home
            </Link>
            <Link to='collections'>
                Collections 
            </Link>
            <Link to='cart'>
                Cart
            </Link>
            <Outlet/>
        </div>
    )
}

export default Navigation;