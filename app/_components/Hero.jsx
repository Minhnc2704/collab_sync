import React from "react";

function Hero() {
  return (
    //<div className="relative bg-gradient-to-r from-blue-600 to-white" id="home">
    <div className="relative bg-gradient-to-r" id="home">
      {/* Content */}
      <div className="relative z-10">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div>
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                Collab & Sync is{" "}
                <span className="text-primary dark:text-white">
                  all you need.
                </span>
              </h1>
              <p className="mt-8 text-gray-700 dark:text-gray-300">
                Collab & Sync is a collaborative workspace that lets teams
                create, share, and work together on projects seamlessly. It
                combines flexible pages with reusable components that sync
                across different apps, making it easy to stay organized and
                up-to-date.
              </p>
              <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <a
                  href="/dashboard"
                  className="relative flex h-11 w-full items-center justify-center px-6 bg-black hover:bg-gray-800 text-white rounded-full transition duration-300 sm:w-max"
                >
                  <span className="relative text-base font-semibold">
                    Get started
                  </span>
                </a>
                <a
                  href="#"
                  className="relative flex h-11 w-full items-center justify-center px-6 bg-white hover:bg-gray-200 text-black rounded-full transition duration-300 sm:w-max"
                >
                  <span className="relative text-base font-semibold">
                    Learn more
                  </span>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
