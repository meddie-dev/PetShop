import BG_dog from '../assets/HeroIcons/Hero_img.jpg'
const hero = () => {
  return (
    <>
      <section className="p-5 max-w-[90%] mx-auto ">
        <div className='relative z-10 overflow-hidden flex'>
          <div className='flex flex-col justify-center p-5 my-20 ml-20  gap-5
          
          max-lg:ml-10
          max-md:ml-10
          max-sm:ml-2
          '> 
          <p className='text-7xl text-white font-medium w-[41%] text-left
          
          max-xl:text-6xl
          max-lg:text-5xl
          max-lg:w-[45%] 
          max-md:text-5xl
          max-md:w-[50%]
          max-sm:text-3xl
          max-sm:w-[50%]
          '>Serve Your Best  Friend Only the Best</p>
          <button className='w-40 mt-6
          
          max-sm:w-32 
          max-sm:text-sm
          max-sm:mt-2
          '>SHOP NOW</button>
          </div>
          <img src={BG_dog} alt="BG_dog" className='absolute w-full h-full top-0 left-0 -z-20 object-cover brightness-75 opacity-85' />
        </div>
        
      </section>
    </>
  )
}

export default hero