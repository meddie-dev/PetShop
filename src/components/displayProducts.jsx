import { product } from "../utils"
import { Link } from "react-router-dom";
import CART from "../assets/NavbarIcons/Cart.svg";

function displayProducts() {
  return (
    <>
        <section className="max-w-[90%] mx-auto h-full p-5">
            <div>
                <div className="text-center uppercase">
                    <h1 className="text-3xl  font-semibold text-[--main-color] brightness-75">New Products</h1>
                </div>
            </div>
            <div className="flex flex-row gap-10 text-center
            
            max-lg:gap-5
            max-md:grid 
            max-md:grid-cols-2
            max-sm:flex-col
            max-sm:grid-cols-1
            
            ">
                {product.map((item) => (
                    <div key={item.id} className="mt-10 cursor-pointer">
                       <div className="relative z-10">
                        <img src={item.image} alt="product" className="w-full h-[300px] object-contain 
                            
                            hover:scale-125
                            hover:object-contain
                            hover:duration-700

                            max-md:hover:scale-110
                        " /> 
                        <div className="hidden absolute -top-2 -right-8 rotate-45 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[50px] border-b-[--main-color] max-sm:block"></div>
                        <div className="hidden absolute -bottom-2 -left-8 rotate-[225deg] w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[50px] border-b-[--main-color] max-sm:block"></div>
                       </div>
                        <div className="mt-5 text-[--main-color] brightness-75 font-thin">
                            <h1>{item.name}</h1> 
                            <h5>₱{item.price}.00</h5>
                        </div>
                    </div>
                ))}

               
            </div>
            <div className="flex justify-center my-10">
                <button className="bg-[--main-color] text-white px-5 py-2 hover:bg-white hover:text-[--main-color] hover:border-[--main-color]" ><Link to="/Shop">SHOP ALL</Link></button>
            </div >
            <div className="mx-auto w-[6%] h-[2px] bg-[--main-color]"></div>
        </section>
    </>
  )
}

export default displayProducts