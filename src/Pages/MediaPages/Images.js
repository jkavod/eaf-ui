import React from "react";
import { Nav, ScrollButton } from "../../Constants";
import { ImgA, ImgAA, ImgB, ImgBB, ImgC, ImgCCC, ImgD, ImgDD, ImgE, ImgF, ImgG, ImgH, ImgI, ImgJ, ImgK, ImgL, ImgM } from "../../Assets";
import { Footer } from "../../UI";

export default function Images() {
  return (
    <div>
      <Nav />
      <div className="bg-black py-32 flex justify-center items-center w-full">
        <h1 className="text-3xl font-bold tracking-tight text-mainColor sm:text-6xl">
          Images Section
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgA}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgB}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgC}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgD}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgE}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgF}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgG}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgH}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgI}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgJ}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgK}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgL}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgM}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgAA}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgBB}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgCCC}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ImgDD}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-black opacity-60">
          <Footer />
          <ScrollButton />
        </div>
    </div>
  );
}
