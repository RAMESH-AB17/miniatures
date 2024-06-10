import './Get.css'

const Get = () =>{
    return <>
    <div className='WQ'>
    <div className='QW'>
        <form>
        <h3 className='KR'>Order Miniatures</h3><br/>
    <label>Name</label>
        <input type='text' id='name' required/><br/><br/>
    <label>Email id</label>
        <input type='text' id='email' required/><br/><br/>
    <label>Phone no</label>
        <input type='text' id='phone no' minLength={10} maxLength={10} required/> <br/><br/>
    <label>Product name</label>
        <input type='text' id='product' required/> <br/><br/> 
    <label>Additional comments</label>
        <textarea  id='comments' name='suggestion'placeholder='describe your product' cols={20} required /> <br/><br/> 
   <div className='S'>
    <input type="submit" />
    </div>
    </form>
    </div>
    </div>
    <div className='WK'>
    <div className='RK'>
    <form>
    <h3  className='KR'>Order Our Products </h3><br/>
    <label>Name</label>
        <input type='text' id='name' required/><br/><br/>
    <label>Email id</label>
        <input type='text' id='email' required/><br/><br/>
    <label>Phone no</label>
        <input type='text' id='phone no' minLength={10} maxLength={10}  required/> <br/><br/>
    <label>Product name</label>
        <input type='text' id='product' required/> <br/><br/> 
    <label for='quantity'>Quantity</label>
        <input type='number' id="quantity" name="quantity" min="1" max="100" style={{width: 160}} required/><br/><br/><br/>
   <div className='S'>
    <input type="submit" />
    </div>
    </form>
    </div>
    </div>
    </>
}
export default Get;