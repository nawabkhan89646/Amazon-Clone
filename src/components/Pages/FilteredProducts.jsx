
import React, { useContext } from 'react';
import { ecomContext } from '../../App';

function FilteredProducts() {
    const { filteredProduct, handleAddtoCart } = useContext(ecomContext);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
                {filteredProduct && filteredProduct.length > 0 ? (
                    filteredProduct.map(product => (
                        <div key={product.asin} className="bg-white p-4 shadow-md rounded-lg flex flex-col mb-4 sm:w-full lg:w-auto">
                            <img src={product.product_photo} alt={product.product_title} className="w-50 h-60 object-cover mb-4 rounded-lg mx-auto" />
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-lg font-bold mb-2 ">{product.product_title}</h3>
                                <p className="text-lg font-semibold text-gray-900 mb-2">Price: {product.product_price}</p>
                                <p className="text-sm text-gray-600 mb-2">Rating: ⭐{product.product_star_rating} ({product.product_num_ratings} reviews)</p>
                                <p className="text-sm text-gray-600 line-clamp-3">{product.product_description}</p>
                                <p className="text-sm text-gray-600">Volume: {product.sales_volume}</p>
                                <button 
                                    onClick={(e) => handleAddtoCart(e, product)}
                                    className="mt-2 w-full max-w-xs font-semibold bg-[#f3a847] text-white px-4 py-2 rounded hover:bg-[#e69730] transition duration-300"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No products found</p>
                )}
            </div>

            {/* Custom CSS for screens less than 440px */}
            <style>
                {`
                @media (max-width: 439px) {
                    .grid {
                        grid-template-columns: 1fr;
                    }
                }
                `}
            </style>
        </div>
    );
}

export default FilteredProducts;
















