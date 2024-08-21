import React, { useState, useEffect, useContext } from 'react';
import { ecomContext } from '../App';

const Products = () => {
    const {products , handleAddtoCart} = useContext(ecomContext);
    // console.log(products);

    return (
        <div>
            {/* <h1>Products</h1> */}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <div className="container mx-auto px-4 my-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.length > 0 ? products.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4">
                            <img src={item.product_photo} alt={item.product_title} className=" w-50 h-64 object-cover mb-4 rounded" />
                            <h2 className="text-xl font-semibold mb-2">{item.product_title}</h2>
                            <p className="text-gray-700">Price: <span className="font-bold">{item.product_price}</span></p>
                            {item.product_original_price && <p className="text-gray-500 line-through">Original Price: {item.product_original_price}</p>}
                            <p className="text-yellow-500">Rating: {item.product_star_rating} ★</p>
                            <p className="text-gray-600">Number of Ratings: {item.product_num_ratings}</p>
                            <div className="flex flex-col gap-2 mt-4">
                                <a href={item.product_url} target="_blank" rel="noopener noreferrer" className="bg-amazon_light_blue text-white font-semibold px-4 py-2 rounded hover:bg-amazon_blue transition w-full text-center">View Product</a>
                                <button
                                 onClick={(e) => handleAddtoCart(e, item)}
                                 className="bg-[#f3a847] text-white font-semibold px-4 py-2 rounded hover:bg-[#e69730] transition w-full">Add to Cart</button>
                            </div>
                        </div>
                    )) : <p className="text-center text-gray-500">No products available</p>}
                </div>
            </div>

        </div>
    );
};

export default Products;
