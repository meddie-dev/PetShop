import { navList, language } from '../utils/index'
import { Link } from 'react-router-dom';

// Bowl Logo
import BLOGO from "../assets/NavbarIcons/bowl logo (blue).svg";
import WLOGO from "../assets/NavbarIcons/bowl logo (white).svg";

// Cart Icon
import CART from "../assets/NavbarIcons/Cart.svg";

// User Icon
import USER from "../assets/NavbarIcons/User logo.svg";

// Max-md Icons
import HAMBURGER from "../assets/NavbarIcons/hamburger.svg";
import SEACRH from "../assets/NavbarIcons/searchIcon.svg";
import HELP from "../assets/NavbarIcons/helpIcon.svg";


const navbar = ({count}) => {
  return (
    <>
      <div className='sticky rounded-t-xl w-full h-full  bg-[--main-color] p-2 text-white uppercase '>

        <div className='max-w-[93%] mx-auto flex items-center justify-between 
        
        max-xl:max-w-[97%]
        max-sm:hidden
        '>

          <select className='bg-[--main-color] text-sm font-medium hover:bg-white hover:text-[#4e46e5c2] cursor-pointer px-2 border-white rounded-md ' id="lang">
            {language.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>

          <div className='flex items-center gap-3 text-sm font-medium cursor-pointer text-white'>
            <h4 className=' hover:text-gray-300'>Sign in</h4>
            <div className='h-[1rem] w-[1px] bg-white'></div>
            <h4 className=' hover:text-gray-300'>Create an account</h4>
          </div>

        </div>

        <div className=' hidden items-center justify-center normal-case
        max-sm:flex'>
          <p className='
            text-sm font-medium text-white
          '>
            Get free delivery on orders over <span className='font-bold'>₱5,000</span></p>
        </div>

      </div>

      {/* Full View */}

      <div className=' sticky top-0 z-20 bg-white max-w-[90%] mx-auto flex items-center p-2 justify-between 
      
      max-xl:max-w-[95%]
      max-md:hidden
      '>

        <div>
          <img src={BLOGO} width={50} height={50} alt="logo" className='rotate-45' />
        </div>

        <div className='flex items-center justify-center p-5 uppercase '>
          {navList.map((nav) => (
            <div key={nav} className='px-5 text-sm  font-medium cursor-pointer text-[--main-color] hover:text-gray-300'>
              <Link to={`/${nav === "Home" ? "" : nav}`}>{nav}</Link>
            </div>
          ))}
        </div>

        <div className='flexitems-center justify-center gap-4'>

          <div className='relavative z-10 flex items-center justify-center'>
            <div>
              <img src={CART} width={30} height={30} alt="cart" />
            </div>
            <span className={`absolute flex text-center justify-center items-center top-3  bg-[--main-color] rounded-full px-2 text-sm text-white
              ${count >= 99 ? "-right-2 w-[30px] h-[30px] " : "-right-2 w-7 h-7 "}
              `}>
              {`${count > 99 ? "99+" : count}`}
            </span>
          </div>

        </div>

      </div>

      {/* Medium View */}

      <div className='max-w-[95%] mx-auto hidden items-center p-2 justify-between 
      
      max-md:flex
      max-sm:hidden

      '>

        <div className='flex items-center justify-center gap-4'>
          <img src={HAMBURGER} width={30} height={30} alt="Hamburger Icon" />
          <img src={SEACRH} width={30} height={30} alt="Search Icon" />
        </div>

        <div>
          <img src={BLOGO} width={50} height={50} alt="logo" className='rotate-45' />
        </div>

        <div className='flex items-center justify-center gap-4'>

          <div>
            <img src={HELP} width={30} height={30} alt="Help Icon" />
          </div>

          <div className='flex items-center justify-center'>
            <div>
              <img src={CART} width={30} height={30} alt="cart" />
            </div>
            <span className={`absolute flex text-center justify-center items-center top-11  bg-[--main-color] rounded-full px-2 text-sm text-white
              ${count >= 99 ? "right-2 w-[24px] h-[24px] max-md:text-[9px] " : "right-2 w-5 h-5 "}
              `}>
              {`${count > 99 ? "99+" : count}`}
            </span>
          </div>

        </div>

      </div>

      {/* Small View */}

      <div className='max-w-[95%] mx-auto  hidden items-center p-2 justify-between 
      
      max-md:hidden
      max-sm:flex

      '>

        <div className='flex items-center justify-center gap-4'>
          <img src={HAMBURGER} width={25} height={25} alt="Hamburger Icon" />
          <img src={SEACRH} width={25} height={25} alt="Search Icon" />
        </div>

        <div>
          <img src={BLOGO} width={50} height={50} alt="logo" className='rotate-45' />
        </div>

        <div className='flex items-center justify-center gap-4'>

          <div>
            <img src={HELP} width={25} height={25} alt="Help Icon" />
          </div>

          <div className='flex items-center justify-center'>
            <div>
              <img src={CART} width={25} height={25} alt="cart" />
            </div>
            <span className={`absolute flex text-center justify-center items-center top-11  bg-[--main-color] rounded-full px-2 text-sm text-white
              ${count >= 99 ? "right-2 w-[24px] h-[24px] max-sm:text-[9px] " : "right-2 w-5 h-5 "}
              `}>
              {`${count > 99 ? "99+" : count}`}
            </span>
          </div>

        </div>

      </div>
    </>
  )
}

export default navbar