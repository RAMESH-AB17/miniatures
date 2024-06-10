import { Link } from "react-router-dom";
import "./Home.css";
const Home = ()=>{
    return <div className="A">
            <div className="B">
           <p>"We don't want to push our ideas on to customers, we simply want to make what they want."</p>
           <Link className="C" to="/Aboutus">Readmore</Link>
           </div>
        </div>
}
export default Home;