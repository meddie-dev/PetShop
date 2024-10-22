// Import React
import { Routes, Route} from 'react-router-dom'


// Import Components
import Home from './pages/home'
import Shop from './pages/shop'
import About from './pages/about'
import GivingBack from './pages/givingBack'

// Side Icons
import SIDE1 from '../src/assets/SideIcons/side1.svg'
import SIDE2 from '../src/assets/SideIcons/side2.svg'
import SIDE3 from '../src/assets/SideIcons/side3.svg'

const App = () => {
  
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/About' element={<About   />} />
        <Route path='/GivingBack' element={<GivingBack   />} />

      </Routes>

      <div className='fixed flex flex-col right-3 top-64 gap-8 m-4 max-xl:hidden'>
        <img src={SIDE1} width={30} height={30} alt="Side 1 Icon" />
        <img src={SIDE2} width={30} height={30} alt="Side 2 Icon" />
        <img src={SIDE3} width={30} height={30} alt="Side 3 Icon" />
      </div>
    </>
  )
}

export default App