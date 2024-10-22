import { Stats } from "../utils"
import img from "../assets/Stats/bg-dog.jpg"


function stat() {
  return (
    <>
        <section className=' max-w-[90%] mt-10 mx-auto h-full p-5'>
            <div className="relative z-10">
                <div className="relative z-10 ml-14 max-w-[40%]
                
                max-lg:max-w-[50%]
                max-md:max-w-[53%]
                max-sm:max-w-[80%]
                max-sm:mx-auto
                
                ">
                    {Stats.map((item) => (
                        <div key={item.id} className=" py-9 px-20 bg-[#89c2d979] 
                        
                        max-lg:px-14
                        max-md:py-10
                        max-sm:px-9
                        max-sm:py-7
                        

                        ">
                            <div  >
                                <h1 className="max-w-[50%] text-2xl text-brown-300 font-semibold mb-2 text-white
                                
                                
                                max-lg:text-xl
                                max-md:text-md
                                max-sm:max-w-[90%]
                                max-sm:font-bold

                                ">{item.title}</h1>
                                <p className="
                                max-md:text-sm text-white
                                ">{item.description}</p>
                                <div className="w-[20%] h-[2px] bg-[--main-color] mt-5 "></div>
                            </div>
                        </div>
                    ))}
                    
                </div>
           <img src={img} className="absolute w-full h-full object-cover z-0 top-0 right-0 transform scale-x-[-1]
           max-sm:object-top brightness-75 opacity-85
           " />
            </div>
        </section>
    
    </>
  )
}

export default stat