import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <Link to='collections'>
                <button>
                    <img src='https://t4.ftcdn.net/jpg/02/11/11/15/360_F_211111574_VLtzH6ORhebXvnJXjlkAkaUuAftnvmJH.jpg' alt="Shoes"/>
                    Shop Now
                </button>
            </Link>

        </div>
    )
}

export default Home;