import React from "react";

const Nav = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <div className="navbar bg-base-100 text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>

                <li>
                  <a>About Me</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>Testmonials</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl text-orange-500">LOGO</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>About Me</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Testmonials</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-orange-500">Downlaod CV</a>
          </div>
        </div>
      </div>

      {/* ------------  */}

      <div className="p-6">
        <div className="p-6  ">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h1 className="text-3xl font-bold uppercase mb-5">
                HI, I’m Fatiha A creative
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9592 0.540761L21.4994 12.4858L34.0951 16.3233L22.1501 21.8635L18.3125 34.4592L12.7723 22.5142L0.176646 18.6766L12.1217 13.1364L15.9592 0.540761Z"
                    fill="#FD853A"
                  />
                </svg>
                Designer Based in <span className="bg-orange-400">Dhaka</span>
              </h1>

              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="gap-5 flex text-white mb-5">
                <button>DESIGNR</button>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9592 0.540761L21.4994 12.4858L34.0951 16.3233L22.1501 21.8635L18.3125 34.4592L12.7723 22.5142L0.176646 18.6766L12.1217 13.1364L15.9592 0.540761Z"
                    fill="#FD853A"
                  />
                </svg>
                <button className="">DEVELOPEMENT</button>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9592 0.540761L21.4994 12.4858L34.0951 16.3233L22.1501 21.8635L18.3125 34.4592L12.7723 22.5142L0.176646 18.6766L12.1217 13.1364L15.9592 0.540761Z"
                    fill="#FD853A"
                  />
                </svg>
                <button>WEBFLOW</button>
              </div>
              <div className="flex gap-5 bg-transparent bg-slate-600 max-w-60 rounded-3xl p-2">
                <button className="btn btn-primary rounded-3xl bg-orange-400 border-none">
                  Portfolio
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25 19.0217L18.75 1.52173"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="btn btn-primary ">Hire me</button>
              </div>
            </div>

            <div>
              <img
                src="https://i.ibb.co/st80q5x/smiling-blonde-business-woman-posing-with-crossed-arms-171337-6291.jpg"
                className=" rounded-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --------------- */}

      <div
        className="flex justify-between
       items-center  gap-10 p-4"
      >
        <div className="">
          <h2 className="text-2xl font-bold text-white">ABOUT ME</h2>
          <h1 className="mb-5 mt-3  text-white">
            Gather relevant artifacts and examples of <br /> your skills,
            values, abilities, work, and achievements.
          </h1>
        </div>
        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 ">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center py-6 space-y-3">
              <div className="flex space-x-3">
                <button
                  type="button"
                  title="Rate 1 stars"
                  aria-label="Rate 1 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 2 stars"
                  aria-label="Rate 2 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 3 stars"
                  aria-label="Rate 3 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 4 stars"
                  aria-label="Rate 4 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-yellow-700"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Rate 5 stars"
                  aria-label="Rate 5 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-10 h-10 dark:text-gray-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
              </div>
              <span className="text-center text-white">Experince</span>
              <h2 className="text-3xl font-semibold text-center text-white">
                10 Years{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
