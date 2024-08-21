import { createContext, useState, useEffect } from "react"
import './App.css'
import Header from './components/header/Header'
import Home from './components/Home'
import Signin from "./components/Signin"
import Cart from "./components/Cart"
import Products from "./components/Products"
import FilteredProducts from "./components/Pages/FilteredProducts"
import Registration from "./components/Registration"
import UserProfile from "./components/UserProfile"
import ProceedToCheckout from "./components/ProceedToCheckout"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data from './data'
import axios from "axios"
import Footer from "./components/footer/Footer"


export const ecomContext = createContext(null);

function App() {


  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [cart, setCart] = useState([]);

  // console.log(filteredProduct);
 console.log(products);

  // console.log(cart);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // console.log(data);

  const calling = async (val) => {
    console.log(val);
    const options = {
      method: 'GET',
      url: 'https://real-time-amazon-data.p.rapidapi.com/search',
      params: {
        query: `${val}`,
        page: '1',
        country: 'US',
        sort_by: 'RELEVANCE',
        product_condition: 'ALL'
      },
      headers: {
        'x-rapidapi-key': '9007abbd3emshec4506c43be6245p1e3eafjsn0e86dd3945b6',
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      const data = response.data;
      if (data && data.data && data.data.products) {
        setProducts(data.data.products);
      }

    } catch (error) {
      console.error(error);
    }

  }
  useEffect(() => {
    // calling();
  }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  // useEffect(() => {
  //     // Access the products array from the imported data
  //     if (data && data.data && data.data.products) {
  //         setProducts(data.data.products);
  //     }
  // }, []);


  function handleAddtoCart(e, product) {
    e.preventDefault();
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.asin === product.asin);

    let updatedCart;
    if (existingProductIndex !== -1) {
        // Product is already in the cart, update the quantity
        updatedCart = cart.map((item, index) =>
            index === existingProductIndex
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        setCart(updatedCart);
        toast.success(`Increased quantity of ${product.product_title} to ${updatedCart[existingProductIndex].quantity}`, {
          position: "top-center",
          autoClose: 1000
      });
    } else {
        // Product is not in the cart, add it
        updatedCart = [...cart, { ...product, quantity: 1 }];
        setCart(updatedCart);
        toast.success(`Added ${product.product_title} to the cart`, {
          position: "top-center",
          autoClose: 1000
      });
    }
}



  function handleDeleteitem(e, product) {
    e.preventDefault();
    setCart(cart.filter(item => item !== product));
    toast.success(`Item removed from cart`, {
      position: "top-center",
      autoClose: 1000
  });
  }

  function filterData(val) {
    console.log(val);
    setFilteredProduct(data.data.products[val]);
  }


  return (
    <>
      <BrowserRouter>
        <ecomContext.Provider value={{ products, filteredProduct, cart, handleAddtoCart, setCart, handleDeleteitem, calling, filterData, }}>
          <ToastContainer />
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/filteredproduct" element={<FilteredProducts />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/userprofile" element={<UserProfile />}></Route>
            <Route path="/proceedtocheckout" element={<ProceedToCheckout />}></Route>
          </Routes>
          <Footer />
        </ecomContext.Provider>
      </BrowserRouter>


    </>
  )
}

export default App;
