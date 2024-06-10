import './Product.css';
import { Link } from 'react-router-dom';
const Handmade = () =>{
    return <>
    <div className="Miniature">
    <h4>3D Miniature Products</h4><br/>
    <div className='Border'>
        <img className='border'  src={require('./images/m1.png')} alt='mini' height={200} width={200} />
        <p>Full size couple Statue</p>
        <Link className='det' to="/Get">Get Details</Link></div>
        <div className='Border'>
        <img  className='border' src={require('./images/m2.png')} alt='mini' height={200} width={200} />
        <p>Full size Family Statue</p>
        <Link className='det' to="/Get">Get Details</Link>
        </div><div className='Border'>
        <img className='border'  src={require('./images/m3.png')} alt='mini' height={200} width={200} />
        <p>Half size Statue</p>
        <Link className='det' to="/Get">Get Details</Link>
       </div><div className='Border'>
        <img  className='border' src={require('./images/m4.png')} alt='mini' height={200} width={200} />
        <p>2" Family Statue</p>        
        <Link className='det' to="/Get">Get Details</Link> </div>
        </div>
    </>
}
export default Handmade;