// Import Image
import BLOGO from "../assets/NavbarIcons/bowl logo (blue).svg";

function divider() {
    return (
        <>
            <div className='flex justify-evenly items-center my-20'>
                <div className='w-[30%] h-[2px] bg-[--main-color]'></div>
                <img src={BLOGO} width={50} height={50} alt="logo" className='rotate-45' />
                <div className='w-[30%] h-[2px] bg-[--main-color]'></div>
            </div>
        </>
    )
}

export default divider