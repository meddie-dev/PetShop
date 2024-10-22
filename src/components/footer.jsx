// Side Icons
import SIDE1 from '../assets/SideIcons/side1.svg'
import SIDE2 from '../assets/SideIcons/side2.svg'
import SIDE3 from '../assets/SideIcons/side3.svg'

function footer() {
  return (
    <>
      <footer className="bg-[--main-color] text-white py-8">
        {/* Copyright Section */}
        <div className="text-center ">
          <p>
            &copy; {new Date().getFullYear()} Chichay's Bite. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default footer;
