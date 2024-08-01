import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
function Home() {
  const navigate = useNavigate();
  const [isFlipped, setisFlipped] = useState(false);

  function Flipcard() {
    setisFlipped(!isFlipped);
  }
  return (
    <section className="bg-sky-300 mt-0">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="/backgroundhome.jpeg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="font-Madimi flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <a className="block text-blue-600" href="#">
              <span className="sr-only">Home</span>
            </a>

            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Welcome to Culture Byte!!!")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("We serve Culture of various states")
                    .start();
                }}
              />
            </h1>

            <h3 className="">Food as a Cultural Ambassador</h3>

            <p className="mt-4 leading-relaxed text-gray-800">
              Taste the variety of food of different states on one single
              platform .
            </p>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 lg:gap-8">
              <button
                className="h-32 w-32  bg-lime-300 rounded-2xl hover:scale-110"
                onClick={() => navigate("/region-maha")}
              >
              Maharashtrian
              </button>
              <button
                className="h-32 w-32  bg-lime-300 rounded-2xl hover:scale-110"
                onClick={() => navigate("/region-south")}
              >
                South Indian
              </button>
              <button
                className="h-32 w-32  bg-lime-300 rounded-2xl hover:scale-110 "
                onClick={() => navigate("/region-rajasthan")}
              >
                Rajasthani
              </button>
              <button className="h-32 w-32  bg-lime-300 rounded-2xl hover:scale-110">
                Punjabi
              </button>
              <button className="h-32 w-32  bg-lime-300 rounded-2xl hover:scale-110">
                Kathyawadi
              </button>
              <button className="h-32 w-32  bg-lime-300 rounded-2xl hover:scale-110">
                Gujrati
              </button>
              <button className="h-32 w-32  bg-lime-300 rounded-2xl hover:scale-110">
                Maarwadi
              </button>
              <button className="h-32 w-32  bg-lime-300 rounded-2xl hover:scale-110">
                Bengali
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Home;
