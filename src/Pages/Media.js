import React from "react";
import { Carousel, Nav, ScrollButton } from "../Constants";
import { Footer } from "../UI";
import { Link } from 'react-router-dom'

export default function Media() {
  return (
    <>
      {" "}
      <div>
        <div>
          <div className="relative">
            <Nav />
          </div>
          <div className="bckgrnd">
            <Carousel />
            <div className="absolute flex justify-center items-center left-0 top-20 w-[100%] h-[100%] text-whiteShade font-bold">
              <div>
                <div className="relative isolate px-6 lg:px-8">
                  <div
                    className="mx-auto max-w-7xl py-80 lg:py-96"
                    id="heeader"
                  >
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
                    <div className="text-center flex flex-col gap-10">
                      <h1 className="text-3xl font-bold tracking-tight text-mainColor sm:text-6xl">
                        Our Gallery Section
                      </h1>
                      <div className="flex justify-center items-center gap-10 text-black px-5">
                        <Link to={"/images"} className="bg-mainColor px-16 py-5">Images</Link>
                        <Link to={"/videos"} className="bg-mainColor px-16 py-5">Videos</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-black opacity-60">
          <Footer />
          <ScrollButton />
        </div>
      </div>
    </>
  );
}
