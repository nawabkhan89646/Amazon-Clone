import React, { useContext, useEffect, useState } from 'react';
import { ecomContext } from '../App';
import { EmptyCart } from '../assets';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate();
    const { cart, handleDeleteitem, handleAddtoCart , setCart } = useContext(ecomContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);

    useEffect(() => {
        let subtotal = 0;
        cart.forEach(item => {
            const price = parseFloat(item.product_price.replace('$', ''));
            subtotal += price * item.quantity; // Calculate subtotal
        });
        const tax = 3.22;
        const shippingCost = cart.length > 0 ? 2.99 : 0;
        const total = subtotal + tax + shippingCost;

        setSubtotal(parseFloat(subtotal.toFixed(2)));
        setTax(parseFloat(tax.toFixed(2)));
        setShippingCost(parseFloat(shippingCost.toFixed(2)));
        setTotalPrice(parseFloat(total.toFixed(2)));
    }, [cart]);

    // Update quantity for a specific item
    function handleIncreaseQuantity(asin) {
        setCart(cart.map(item =>
          item.asin === asin
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      }
      
      function handleDecreaseQuantity(asin) {
        setCart(cart.map(item =>
          item.asin === asin && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ));
      }

    return (
        <div className='w-full bg-gray-100 p-4 mt-4 mb-4'>
            {cart.length > 0 ? (
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8'>
                    <div className='w-full md:col-span-4 bg-white px-4'>
                        <div className='flex items-center justify-between border-b-[1px] border-b-gray-400 py-3'>
                            <h2 className='text-3xl font-medium'>Shopping Cart</h2>
                            <h4 className='text-xl font-normal hidden md:block'>Subtitles</h4>
                        </div>

                        <div className='w-full'>
                            {cart.map((item) => (
                                <div key={item.asin} className='w-full border-b border-gray-300 p-4 flex flex-col md:flex-row items-center gap-6'>
                                    <div className='w-full md:w-1/5 flex justify-center'>
                                        <img className='w-full h-44 object-contain' src={item.product_photo} alt={item.product_title} />
                                    </div>
                                    <div className='w-full md:w-1/2'>
                                        <h2 className='font-semibold text-lg'>{item.product_title}</h2>
                                        <p className='font-semibold text-base'>Price: {item.product_price}</p>
                                        <p className='text-gray-500 line-through'>{item.product_original_price}</p>
                                        <p className='text-yellow-500'>{item.product_star_rating} ★</p>

                                        {/* Quantity Control */}
                                        <div className='flex bg-gray-200 justify-center items-center gap-1 w-24 py-1 text-center shadow-md rounded-md mt-2'>
                                            <p>Qty:</p>
                                            <p
                                                className='cursor-pointer bg-gray-300 px-1 rounded-md hover:bg-gray-400 duration-300'
                                                onClick={() => handleDecreaseQuantity(item.asin)}
                                            >
                                                -
                                            </p>
                                            <p>{item.quantity}</p>
                                            <p
                                                className='cursor-pointer bg-gray-300 px-1 rounded-md hover:bg-gray-400 duration-300'
                                                onClick={() => handleIncreaseQuantity(item.asin)}
                                            >
                                                +
                                            </p>
                                        </div>

                                        <div className='mt-3'>
                                            <button onClick={(e) => handleDeleteitem(e, item)} className='bg-red-500 px-5 py-2 rounded-md text-white hover:bg-red-600 transition duration-300'>Remove</button>
                                        </div>
                                    </div>
                                    <div className='ml-auto'>
                                        <h2 className='font-bold text-xl'>${parseFloat(item.product_price.replace('$', '')) * item.quantity}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Total price section  */}
                    <div className='w-full md:col-span-1 h-auto md:h-72 bg-white p-4'>
                        {cart.length === 0 ? (
                            <div className='flex flex-col items-center justify-center h-full'>
                                <p className='text-gray-500 text-lg'>Your cart is empty.</p>
                                <button className='font-semibold mt-4 bg-[#f3a847] text-white py-2 px-4 rounded-md hover:bg-[#e69730] transition duration-300'>
                                    Continue Shopping
                                </button>
                            </div>
                        ) : (
                            <div className='border p-4 rounded-md shadow-md'>
                                <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
                                <div className='flex justify-between mb-2'>
                                    <p>Subtotal</p>
                                    <p className='text-right'>${subtotal}</p>
                                </div>
                                <div className='flex justify-between mb-2'>
                                    <p>Tax</p>
                                    <p className='text-right'>${tax}</p>
                                </div>
                                <div className='flex justify-between mb-2'>
                                    <p>Shipping Cost</p>
                                    <p className='text-right'>${shippingCost}</p>
                                </div>
                                <div className='border-t border-gray-300 my-2'></div>
                                <div className='flex justify-between text-sm font-bold'>
                                    <p>Total Price</p>
                                    <p className='text-right'>${totalPrice}</p>
                                </div>

                                <Link to="/proceedtocheckout">
                                    <button className='shadow-custom font-bold text-sm w-full mt-4 bg-[#f3a847] text-white py-2 rounded-md hover:bg-[#e69730] transition duration-300'>
                                        Proceed to Checkout
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className='flex flex-col lg:flex-row justify-evenly items-center lg:items-start lg:space-x-8 space-y-8 lg:space-y-0'>
                    <div className='w-full lg:w-auto'>
                        <img className='w-80 rounded-lg p-4 mx-auto' src={EmptyCart} alt="Empty Cart" />
                    </div>
                    <div className='w-full lg:w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg'>
                        <h1 className='text-xl font-bold'>Your cart is empty</h1>
                        <p className='mt-2 mb-2 text-center'>Your Shopping cart lives to serve. Give it purpose - fill it with books, electronics, gadgets, etc., and make it happy :)</p>
                        <Link to="/">
                            <button className='bg-[#f3a847] hover:bg-[#e69730] duration-300 px-4 py-2 rounded-md text-white font-semibold mt-2 mb-2'>Continue Shopping</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
