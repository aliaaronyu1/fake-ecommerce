import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <Link to='shop' className="d-flex align-items-start flex-column">
                <img src='https://t4.ftcdn.net/jpg/02/11/11/15/360_F_211111574_VLtzH6ORhebXvnJXjlkAkaUuAftnvmJH.jpg' alt="Shoes" width={500} height={300}/>
                    Shop Now
            </Link>

        </div>
    )
}

export default Home;