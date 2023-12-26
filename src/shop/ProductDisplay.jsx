import React, { useState } from 'react'
import Ratings from '../home/Ratings';
import { Link } from 'react-router-dom';


const ProductDisplay = ({item}) => { 
    const {name,id,price,seller,ratings,ratingsCount, quantity,img} = item;

    const [prequantity,setQuantity] = useState(quantity);
    const [coupon,setCoupon] = useState("");
    const [size,setSize] = useState("Select size");
    const [color,setColor] = useState("Select color");
    const ratingContainer = document.getElementById("ratingContainer");
    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            name: name,
            size: size,
            color: color,
            coupon: coupon,
            price: price,
            quantity: quantity,
            img: img,

        }
        console.log(product);
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = existingCart.findIndex(( prod => prod.id === id));
        if (existingProductIndex !== -1 ){
            existingCart[existingProductIndex].quantity += prequantity;
        } else {
            existingCart.push(product);
        }
        //update local storage
        localStorage.setItem("cart",JSON.stringify(existingCart));


        //reset form field
        setQuantity(1);
        setColor("Select Color");
        setSize("Select size");
        setColor("");

        
    }
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p id="ratingContainer" className='rating'>
          <Ratings ratingCount={ratings} />
          {ratingsCount} review
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut velit diam. Aenean sed neque purus. Proin scelerisque mauris eu imperdiet cursus.
         Vivamus in dapibus leo. Sed tincidunt sed neque eget congue. Quisque imperdiet volutpat eros, a pretium enim malesuada at. 
        </p>
      </div>

      {/* cart components */}
      <div>
        <form onSubmit={handleSubmit}>
            {/* size */}
            <div className='select-product size'>
                <select value="size" onChange={(e) => setSize(e.target.value)}>
                    <option>{size}</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>

                </select>
                <i className='icofont-rounded-down'></i>
            </div>
            {/* color */}
            <div className='select-product color'>
                <select value="color" onChange={(e) => setColor(e.target.value)}>
                    <option>{color}</option>
                    <option value="Red">Red</option>
                    <option value="white">white</option>
                    <option value="Blue">Blue</option>
                    <option value="Black">Black</option>
                    <option value="Ash">Ash</option>

                </select>
                <i className='icofont-rounded-down'></i>
            </div>
            {/* cart plus minus */}
            <div className='cart-plus-minus'>
                <div 
                    onClick = {() => {
                       if(prequantity > 1){
                        setQuantity(prequantity - 1)
                       }
                    }}
                   className='dec qtybutton'
                 >-</div>
                <input className="cart-plus-minus-box" type='text'name='qtybutton' id='qtybutton' value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value))}/>
                <div onClick={() => setQuantity(prequantity + 1)} className='inc qtybutton'>+</div>
            </div>
            {/*coupon field*/}
            <div className='discount-code mb-2'>
                <input type='text' placeholder='Enter Discount Code' onChange={(e) => setCoupon(e.target.value)}/>
            </div>

            {/* button */}
            <button type="submit" className='lab-btn'>
                   <span>Add to Cart</span> 
            </button>
            <Link to="/cart-page" className="lab-btn bg-primary">
                <span>Check out</span>
            </Link>
            
        </form>
      </div>
    </div>
  )
}

export default ProductDisplay
