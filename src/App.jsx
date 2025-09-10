import img from "../src/assets/img1.png";

function App() {
  return (
    <>
      <div className="flex justify-center  items-center h-screen w-full">
        <div className="bg-amber-50 w-[600px] h-[300px] rounded-3xl">
          <div className="">
            <img src={img} alt="" className="rounded-t-2xl" />
          </div>

          <div className="rounded-b-2xl bg-amber-50">
            <h3>sekcia </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              illum dicta voluptatum assumenda quidem quia dolor debitis
              temporibus iste optio neque magni possimus consequuntur officiis
              obcaecati corrupti, veritatis vero deserunt!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
