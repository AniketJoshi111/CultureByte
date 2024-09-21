import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gujaratDishes from '../regionData/Gujrati'; // Make sure this path matches your actual file structure
import { addToCart } from '../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const Gujarati = () => {
    const [cartData, setCartData] = useState(gujaratDishes);
    const dispatch = useDispatch();

    // add to cart 
    const send = (e) => {
        dispatch(addToCart(e));
        toast.success("Item added In Your Cart");
    };

    return (
        <>
        
        </>
    );
}

export default Gujarati;