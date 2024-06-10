import { Link } from 'react-router-dom';
import './Miniatures.css';
const Miniatures = () =>{
    return <>
    <div className='line'>
        <h4 >BAMBOO PRODUCTS</h4>
        <div className='align'>
        <img className='design' src={require('./images/b1.png')} alt='bamboo' height={150} width={150} />
         <h5 className='name'>Kitchen Set</h5>
         <p className='price'>4999/-</p>
         <Link className='btn' to='/Get'>Buy Now</Link>
        </div>
        <div className='align'>
        <img className='design' src={require('./images/b2.png')} alt='bamboo' height={150} width={150}/>
         <h5 className='name'>Mug Holder</h5>
         <p className='price'>999/-</p>
         <Link className='btn' to='/Get'>Buy Now</Link>
        </div>
        <div className='align'>
        <img className='design' src={require('./images/b3.png')} alt='bamboo' height={150} width={150}/>
         <h5 className='name'>Bath Set</h5>
         <p className='price'>2999/-</p>
         <Link className='btn' to='/Get'>Buy Now</Link>
        </div> 
        <div className='align'>
        <img className='design' src={require('./images/b4.png')} alt='bamboo' height={150} width={150}/>
         <h5 className='name'>Ukulele</h5>
         <p className='price'>1999/-</p>
         <Link className='btn' to='/Get'>Buy Now</Link>
        </div>
        <h4 className='gap'>STATUES</h4>
        <div className='align'>
        <img className='design' src={require('./images/s1.png')} alt='bamboo' height={150} width={150} />
         <h5 className='name'>Laughing Buddha</h5>
         <p className='price'>499/-</p>
         <Link className='btn' to='/Get'>Buy Now</Link>
        </div>
        <div className='align'>
        <img className='design' src={require('./images/s2.png')} alt='bamboo' height={150} width={150}/>
         <h5 className='name'>Little Krishna</h5>
         <p className='price'>599/-</p>
         <Link className='btn' to='/Get'>Buy Now</Link>
        </div>
        <div className='align'>
        <img className='design' src={require('./images/s3.png')} alt='bamboo' height={150} width={150}/>
         <h5 className='name'>sculptor</h5>
         <p className='price'>899/-</p>
         <Link className='btn' to='/Get'>Buy Now</Link>
        </div>  
        <div className='align'>
        <img className='design' src={require('./images/s4.png')} alt='bamboo' height={150} width={150}/>
         <h5 className='name'>Angel</h5>
         <p className='price'>699/-</p>
         <Link className='btn' to='/Get'>Buy Now</Link>
        </div>
        <h4 className='gap'>WOOD PRODUCTS</h4>
        <div className='align'>
        <img className='design' src={require('./images/w1.png')} alt='bamboo' height={150} width={150} />
         <h5 className='name'>Wooden Stand Card Holder</h5>
         <p className='price'>499/-</p>
         <Link className='btn' to='/Get'>Buy Now</Link>
        </div>
        <div className='align'>
        <img className='design' src={require('./images/w2.png')} alt='bamboo' height={150} width={150}/>
         <h5 className='name'>Wooden Stand</h5>
         <p className='price'>999/-</p>
         <Link className='btn' to='/Get'>Buy Now</Link>
        </div>
        <div className='align'>
        <img className='design' src={require('./images/w3.png')} alt='bamboo' height={150} width={150}/>
         <h5 className='name'>Wooden table</h5>
         <p className='price'>1599/-</p>
         <Link className='btn' to='/Get'>Buy Now</Link>
        </div>   
        <div className='align'>
        <img className='design' src={require('./images/w4.png')} alt='bamboo' height={150} width={150}/>
         <h5 className='name'>Piggy Bank</h5>
         <p className='price'>499/-</p>
         <Link className='btn' to='/Get'>Buy Now</Link>
        </div>  
</div>

</>
}
export default Miniatures;