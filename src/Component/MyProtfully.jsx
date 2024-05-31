import React from "react";

const MyProtfully = () => {
  return (
    <div>
         <div className="text-center">
        <h2 className="text-2xl font-bold text-white">MY PROTEFOLO</h2>
        <h1 className="mb-5 mt-3  text-white">Gather relevant artifacts and examples of your skills, values, abilities, work, and achievements.</h1>
        <div className="items-center justify-center gap-5 flex text-white">
            <button>UI/UX</button>
            <button className="bg-orange-400 p-2">Web Design</button>
            <button>App Design</button>
            <button>Graphic Design</button>
        </div>
      </div>
      <section className="p-4 lg:p-8 mb-5 mt-5 ">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://i.ibb.co/3h8ppxN/images.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase dark:text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6 dark:text-gray-600">
              My design concept for a sustainable e-commerce platform was selected as a finalist in the [Name of Competition]. The judges commended the design's focus on user experience and eco-friendly features.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/VtmsGR5/download.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase dark:text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6 dark:text-gray-600">
              Awarded by [Name of Awarding Body] for my design of the "Fitness+ App". The app's intuitive interface and user-friendly features were praised for promoting a healthy lifestyle.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://i.ibb.co/3h8ppxN/images.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase dark:text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6 dark:text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProtfully;
