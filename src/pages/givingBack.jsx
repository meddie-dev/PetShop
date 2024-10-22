import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'

import { Testimonial } from '../utils/index.js'
import { useState } from 'react'

function givingBack() {

    let heartCart = [];
    const [count, setCount] = useState(0);
    const [heart, setHeart] = useState([]);
    
    function heartCount(item) {
        const isClicked = heart.includes(item);
        setHeart(isClicked ? heart.filter(i => i !== item) : [...heart, item]);
        setCount(count + (isClicked ? -1 : 1));
        console.log(isClicked ? heartCart.pop() : heartCart.push(item), heartCart);
    }
    

    return (
        <>
            <Navbar />

            <section className="p-5 max-w-[90%] mx-auto mt-20 mb-20 ">
                <div className='relative max-w-[68%] text-center mx-auto my-16 max-xl:max-w-[90%] max-lg:max-w-[90%] max-sm:max-w-[99%]'>
                    <h1 className='text-6xl font-bold text-[--main-color] max-sm:5xl'>GIVING BACK</h1>
                    <h4 className='text-xl font-semibold text-[--main-color] my-5'>With every product you purchase, Rocco's Bites helps provide food to dogs in need</h4>
                    <p className='text-lg text-gray-500'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. <br className='max-md:hidden' /> Just click “Edit Text” or double click me to add your own content <br className='max-md:hidden'/> and make changes to the font.</p>
                </div>

                <div className=" grid grid-cols-2 max-md:grid-cols-1">
                    {Testimonial.map((item) => (
                        <div key={item.id} >
                            <div className="relative p-5  hover:cursor-pointer"   >
                                <div className='relative'>
                                    <img src={item.image} alt={item.name} className={`w-full h-full object-cover
                                ${item.id === 3, 4 ? "h-[500px]" : "h-full"}`} />

                                    <div className='absolute z-10 bottom-7 left-6 flex flex-col justify-center items-left gap-1 text-white hover'>
                                        <h1 >{item.name === "Our Happy Customer" ? null : item.name}</h1>
                                        <p >{item.age}</p>
                                        <p>{item.breed}</p>
                                    </div>
                                </div>

                                <div className={`absolute top-10 right-10 gap-2 text-white flex items-center justify-center ${item.id === 1 ? "hidden" : "flex"}`}>
                                    <button onClick={() => heartCount(Testimonial)} className='hover:cursor-pointer hover:brightness-50'>
                                        {heart? '❤️' : '🤍'}
                                        <span className='ml-2'>{count}</span>
                                    </button> 
                                    
                                </div>
                            </div>


                        </div>
                    ))}

                </div>

            </section>

            <Footer />
        </>
    )
}

export default givingBack