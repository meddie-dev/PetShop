import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

// Import image
import AboutImg from "../assets/About/about.jpg";

function about() {
  return (
    <>
      <Navbar />
      <section className="p-5 max-w-[90%] h-full mx-auto ">
        <div className="grid grid-cols-2 
        max-lg:grid-cols-1
        ">
          <div>
            <img src={AboutImg} className="object-cover object-center w-full h-full "/>
          </div>

          <div className="p-20 max-sm:p-14">
            <h1 className=" max-w-8 mb-8 leading-snug text-6xl font-bold text-[--main-color]
            max-lg:max-w-full
            max-sm:text-5xl
            ">
              OUR YUMMY STORY
            </h1>
            <p className="text-lg font-thin
            max-sm:text-md
            ">
              I'm a paragraph. Click here to add your own text and edit me.
              It&#96;s easy. Just click “Edit Text” or double click me to add
              your own content and make changes to the font. Feel free to drag
              and drop me anywhere you like on your page. I&#96;m a great place
              for you to tell a story and let your users know a little more
              about you. <br/> <br/>This is a great space to write long text about
              your company and your services. You can use this space to go into
              a little more detail about your company. Talk about your team and
              what services you provide. Tell your visitors the story of how you
              came up with the idea for your business and what makes you
              different from your competitors. Make your company stand out and
              show your visitors who you are.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default about;
