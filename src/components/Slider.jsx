import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { useEffect, useState } from "react";

function Slider({ data }) {
  const { id, heading, img, text } = data;
  const [activIndex, setActivIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(activIndex - 1);
  const [nextIndex, setNextIndex] = useState(activIndex + 1);
  /// width resizer observer function
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowWidth >= 768 ? (
        <div className="flex justify-center  items-center h-screen w-[90%] mx-auto relative ">
          <button>
            {" "}
            <GrPrevious />
          </button>

          <div className="flex flex-col absolute justify-center items-center bg-amber-50 w-[400px] h-[250px] rounded-3xl mx-4 z-0 transform translate-x-[60%] md:translate-x-[30%] overflow-hidden">
            <div className="h-1/2">
              <img src={data.img} alt="" className="rounded-t-2xl " />
            </div>

            <div className="rounded-b-2xl bg-amber-50 h-1/2 flex flex-col p-4  ">
              <h3>sekcia </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                illum dicta voluptatum assumenda quidem quia dolor debitis
                temporibus iste optio neque magni possimus consequuntur officiis
                obcaecati corrupti, veritatis vero deserunt!
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center  items-center bg-amber-50 w-[400px] h-[300px] rounded-3xl mx-4 z-10 transform scale-110">
            <div className="h-1/2">
              <img src={data.img} alt="" className="rounded-t-2xl " />
            </div>

            <div className="rounded-b-2xl bg-amber-50 h-1/2 flex flex-col p-4  ">
              <h3>sekcia </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                illum dicta voluptatum assumenda quidem quia dolor debitis
                temporibus iste optio neque magni possimus consequuntur officiis
                obcaecati corrupti, veritatis vero deserunt!
              </p>
            </div>
          </div>

          <div className="flex flex-col absolute justify-center items-center bg-amber-50 w-[400px] h-[250px] rounded-3xl mx-4 z-0 transform translate-x-[-70%]  md:translate-x-[-30%]  overflow-hidden">
            <div className="h-1/2">
              <img src={data.img} alt="" className="rounded-t-2xl " />
            </div>

            <div className="rounded-b-2xl bg-amber-50 h-1/2 flex flex-col p-4  ">
              <h3>sekcia </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                illum dicta voluptatum assumenda quidem quia dolor debitis
                temporibus iste optio neque magni possimus consequuntur officiis
                obcaecati corrupti, veritatis vero deserunt!
              </p>
            </div>
          </div>
          <button>
            <GrNext />
          </button>
        </div>
      ) : (
        <div className="flex justify-center  items-center h-screen w-[90%] mx-auto relative ">
          <button>
            {" "}
            <GrPrevious />
          </button>
          <div className="flex flex-col justify-center  items-center bg-amber-50 w-[400px] h-[300px] rounded-3xl mx-4 z-10 transform scale-110">
            <div className="h-1/2">
              <img src={data.img} alt="" className="rounded-t-2xl " />
            </div>

            <div className="rounded-b-2xl bg-amber-50 h-1/2 flex flex-col p-4  ">
              <h3>sekcia </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                illum dicta voluptatum assumenda quidem quia dolor debitis
                temporibus iste optio neque magni possimus consequuntur officiis
                obcaecati corrupti, veritatis vero deserunt!
              </p>
            </div>
          </div>

          <button>
            <GrNext />
          </button>
        </div>
      )}
    </>
  );
}

export default Slider;
