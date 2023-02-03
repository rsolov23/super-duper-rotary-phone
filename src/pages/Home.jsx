import React from "react";
import "../index.css";
import underConstruction from "../assets/images/underConstruction.jpg"
import Type from "../components/Type.jsx"

export const Home = () => {
  return (
    <>
      <section class="flex flex-col justify-center antialiased text-gray-200 min-h-screen">
        <div class="max-w-6xl mx-auto p-4 sm:px-6 h-full">
          <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <a class="relative block group" href="#0">
              <div
                class="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                aria-hidden="true"
              ></div>
              <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                <img
                  class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src={underConstruction}
                  width="540"
                  height="303"
                  alt="Blog post"
                />
              </figure>
            </a>
            <div>
              <header>
              
                <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                  <a
                    class="hover:text-gray-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    <p>
                      {" "}
                      Hello<span className="wave">👋 </span>,
                    </p>{" "}
                    <p> I'm Rachel Solov</p>{" "}
                  </a>
                </h3>
              </header>
              <p class="text-lg text-gray-400 flex-grow">
                <Type />
              </p>
             
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
