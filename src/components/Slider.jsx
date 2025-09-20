import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

function Slider({ data }) {
  //   const { id, heading, img, text } = data;
  const [activeIndex, setActivIndex] = useState(0);
  //   const prevIndex = (activeIndex - 1 + data.length) % data.length;
  const prevIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
  const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;

  /// width resizer observer function
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //HELPERS FUNCTIONS
  function handleNext() {
    setActivIndex(nextIndex);
  }

  function handlePrevious() {
    setActivIndex(prevIndex);
  }
  // KEYPRESS
  useEffect(() => {
    function handleKeypress(e) {
      if (e.key === "ArrowLeft") {
        setActivIndex(prevIndex);
      } else if (e.key === "ArrowRight") {
        setActivIndex(nextIndex);
      }
    }
    window.addEventListener("keydown", handleKeypress);
    return () => window.removeEventListener("keydown", handleKeypress);
  }, [activeIndex]);

  return (
    <>
      {windowWidth >= 768 ? (
        <div className="flex justify-center  items-center h-screen w-[90%] mx-auto relative  text-center ">
          <button>
            {" "}
            <GrPrevious
              className="text-amber-50 relative right-[150px]"
              onClick={() => handlePrevious()}
            />
          </button>

          <div className="flex flex-col absolute justify-center items-center bg-amber-50 w-[300px] h-[400px] rounded-3xl mx-4 z-0 transform translate-x-[60%] md:translate-x-[30%] overflow-hidden">
            <div className="h-1/2">
              <img
                src={data[prevIndex].img}
                alt=""
                className="rounded-t-2xl "
              />
            </div>
            <div className="rounded-b-2xl bg-amber-50 h-1/2 flex flex-col p-4  ">
              <h3>{data[prevIndex].heading} </h3>
              <p>{data[prevIndex].text}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center  items-center bg-amber-50 w-[300px] h-[400px] rounded-3xl mx-4 z-10 transform scale-110">
            <div className="h-1/2 w-full">
              <img
                src={data[activeIndex].img}
                alt=""
                className="rounded-t-2xl h-[100%] w-[100%] "
              />
            </div>

            <div className="rounded-b-2xl bg-amber-50 h-1/2 flex flex-col p-4  ">
              <h3 className=" text-center">{data[activeIndex].heading} </h3>
              <p>{data[activeIndex].text}</p>
            </div>
          </div>

          <div className="flex flex-col absolute justify-center items-center bg-amber-50 w-[300px] h-[400px] rounded-3xl mx-4 z-0 transform translate-x-[-70%]  md:translate-x-[-30%]  overflow-hidden">
            <div className="h-1/2">
              <img
                src={data[nextIndex].img}
                alt=""
                className="rounded-t-2xl "
              />
            </div>

            <div className="rounded-b-2xl bg-amber-50 h-1/2 flex flex-col p-4  ">
              <h3>{data[nextIndex].heading} </h3>
              <p>{data[nextIndex].text}</p>
            </div>
          </div>
          <button className="text-amber-50 relative left-[150px] ">
            <GrNext className="" onClick={() => handleNext()} />
          </button>
        </div>
      ) : (
        <>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0.2, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="flex justify-center  items-center h-screen w-[80%] mx-auto relative text-left ">
              <div className="flex flex-col justify-center  items-center bg-amber-50 w-[100%] h-[350px] rounded-3xl mx-4 z-10 transform scale-110    ">
                <div className="h-1/2">
                  <img
                    src={data[activeIndex].img}
                    alt=""
                    className="rounded-t-2xl h-[100%]"
                  />
                </div>

                <div className="rounded-b-2xl bg-amber-50  flex-1 flex flex-col  p-1 pt-4  h-1/2 ">
                  <h3 className="pl-10">{data[activeIndex].heading} </h3>

                  <p className="w-[70%]  mx-auto text-[0.7rem] ">
                    {data[activeIndex].text}{" "}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <button className="p-3 bg-black/70 hover:bg-black/60 text-white rounded-tr-xl rounded-br-xl shadow-lg hover:scale-110 duration-300 absolute bottom-[45%] left-[0%] z-20">
            <GrPrevious onClick={handlePrevious} />
          </button>

          <button className="p-3 bg-black/70 hover:bg-black/60 text-white rounded-tl-xl rounded-bl-xl shadow-lg hover:scale-110 duration-300 absolute bottom-[45%] right-[0%] z-20">
            <GrNext onClick={handleNext} />
          </button>
        </>
      )}
    </>
  );
}

export default Slider;
