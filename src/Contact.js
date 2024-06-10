import './Contact.css'

const Contact = () =>{
    return <>
    <div className='W'>
    <div className='Q'>
        <form>
        <center><h3>Connect With Us</h3></center><br/>
    <label>Name</label>
        <input type='text' id='name'/><br/><br/>
    <label>Email id</label>
        <input type='text' id='email'/><br/><br/>
    <label>Phone no</label>
        <input type='text' id='phone no'/> <br/><br/>
    <label>Additional comments</label>
        <textarea  id='comments' name='suggestion'placeholder='describe your product' cols={20} /> <br/><br/> 
   <div className='S'>
    <input type="submit" />
    </div>
    </form>
    </div>
    <div className='R'>
    <div className='V'>
        <img src={require('./images/c.png')} alt='contact' width={200} height={300}/>
    </div>
        <p className='U'>Get In Touch.</p>
        <p className='T'>We are design and 3D printed toy provider agency. You can contact us freely..<br/><br/>Shop No 19, fourth Floor, kolo Ground, Patala, mumbai 187001<br/><br/>miniatures@gmail.com<br/><br/>+91-1927451323</p>
        </div>
  </div>
    </>
}
export default Contact;