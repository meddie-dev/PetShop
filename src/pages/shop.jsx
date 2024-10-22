import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'
import  Pricing  from '../components/pricing.jsx'
import Divider from '../components/divider.jsx'
import { useState, useEffect } from 'react'


// Import Data
import { productList } from '../utils'


function shop() {

    
    let cart = [];
    const [count, setCount] = useState(0);
    
    function addToCart(item) {

        cart.push(item);
        setCount(count + 1);

        console.log(cart);
        
    }

    return (
        <>
            <Navbar count={count} />
            <section className="p-5 max-w-[70%] mx-auto 
            max-sm:max-w-[90%]
            ">
                <div className='mt-14'>
                    <div className='text-center my-5'>
                        <h1 className='text-6xl mb-4 font-bold text-[--main-color]
                        max-sm:text-5xl
                        '>OUR PRODUCTS</h1>
                        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                   <div className='grid grid-cols-3 gap-10
                   max-lg:grid-cols-2
                   max-sm:flex
                   max-sm:flex-col
                   '>
                    {productList.map((product) => (
                            <div className='flex flex-col w-full justify-center items-center object-fill' key={product.id}>

                                <img src={product.image} alt="product" className='w-full object-contain
                                max-sm:w-[80%]
                                ' />
                                <div className='w-full text-center py-5 gap-3'>
                                    <h3 className='text-md my-2'>{product.name}</h3>
                                    <p>₱{product.price}.00</p>
                                </div>
                                <button onClick={() => addToCart(product)} className='w-full hover:bg-white hover:text-[--main-color] hover:border-[--main-color] 
                                max-sm:w-[80%] '>ADD TO CART</button>

                            </div>
                        ))}
                   </div>
                </div>

            </section>
            <Divider />
            <Pricing />
            <Footer />
        </>
    )
}

export default shop