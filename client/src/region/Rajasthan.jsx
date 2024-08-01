import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import rajasthanDishes from '../regionData/Rajasthan';
import { addToCart } from '../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';


const Rajasthan = () => {
    const [cartData, setCartData] = useState(rajasthanDishes);
    const dispatch = useDispatch();


    // add to cart 
    const send = (e)=>{
        dispatch(addToCart(e))
        toast.success("Item added In Your Cart")
    }
    return (
        <>
            <section className='iteam_section mt-4 container bg-sky-300'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>Rajasthani Food</h2>
                <div className='row mt-2 d-flex justify-content-around align-items-center'>
                    {
                        cartData.map((element, index) => {
                            return (
                                <>
                                    <Card style={{ width: "22rem", border: "none" }} className='hove mb-4'>
                                        <Card.Img variant='top' className='cd' src={element.imgdata}/>

                                        <div className="card_body">
                                            <div className="upper_data d-flex justify-content-between align-items-center">
                                                <h4 className='mt-2'>{element.dish}</h4>
                                                <span>{element.rating}&nbsp;★</span>
                                            </div>

                                            <div className="lower_data d-flex justify-content-between ">
                                                <h5>{element.address}</h5>
                                                <span>₹ {element.price}</span>
                                            </div>
                                            <div className="last_data d-flex justify-content-between align-items-center">

                                                <Button style={{ width: "150px", background: "#f58742", border: "none" }} variant='outline-light'
                                                    className='mt-2 mb-2'
                                                    onClick={()=>send(element)}
                                                >Add TO Cart</Button>
                                            </div>
                                        </div>
                                    </Card>
                                </>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default Rajasthan