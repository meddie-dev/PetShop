import { Testimonial } from "../utils";

function testimonial() {
  return (
    <>
      <section
        className="max-w-[90%] mx-auto mb-10 p-10
        max-sm:max-w-[100%]
        max-sm:p-0
        "
      >
        <div
          className="grid grid-cols-2 
           
           max-lg:flex
           max-lg:flex-col
           "
        >
          {Testimonial.map((item) => (
            <div
              key={item.id}
              className={`flex flex-row saturate-50

                    max-sm:flex-col
                    max-sm:skew-x-0
                    
                    
                    ${
                      item.id === 3
                        ? "flex-row max-lg:rounded-r-lg max-lg:-skew-x-12 "
                        :item.id === 1
                        ? "flex-row-reverse max-lg:flex-row max-lg:-skew-x-12"
                        : item.id === 4
                        ? "flex-row max-lg:flex-row-reverse max-lg:-skew-x-12"
                        : "flex-row-reverse max-lg:-skew-x-12"
                    }`}
            >
              <div>
                <img
                  src={item.image}
                  className={`object-cover object-center h-56 w-96 
                        
                        max-xl:w-[26rem]
                       
                        max-sm:w-full
                        max-sm:object-top


                        ${
                          item.id === 3
                            ? "max-sm:object-center"
                            : item.id === 4
                            ? "max-sm:object-center"
                            : "object-center"

                        }`}
                />
              </div>
              <div
                className={`flex flex-col justify-center p-16 h-56 w-[338px] gap-3  opacity-70

                        max-sm:w-full
                        max-sm:p-10
                        

                        ${
                          item.id === 1
                            ? "bg-[#857c48]"
                            : item.id === 2
                            ? "bg-[#56557c]"
                            : item.id === 3
                            ? "bg-[#ffc74e]"
                            : "bg-[#f88d58]"
                        }`}
              >
                <h1
                  className={` font-bold text-left text-white 
                                        ${
                                          item.id === 1
                                            ? "text-3xl max-sm:text-center"
                                            : "text-3xl"
                                        }`}
                >
                  {item.name}
                </h1>

                <p className="text-[12px] text-white">
                  {item.description}
                </p>

                <div
                  className="text-[12px] text-white"
                >
                  <p>{item.age}</p>
                  <p>{item.breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default testimonial;
