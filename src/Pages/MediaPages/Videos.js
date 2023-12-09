import React from "react";
import { Nav, ScrollButton } from "../../Constants";
import { Footer } from "../../UI";
import { VideoA, VideoB } from "../../Assets";

export default function Videos() {
  return (
    <div>
      <Nav />
      <div className="bg-black py-32 flex justify-center items-center w-full">
        <h1 className="text-3xl font-bold tracking-tight text-mainColor sm:text-6xl">
          Videos Section
        </h1>
      </div>

      {/* Video Body */}
      <div className="grid lg:grid-col2 md:grid-cols-2 sm:grid-cols-1 p-10 gap-10">
        <video className="h-full w-full rounded-lg" controls autoPlay>
          <source src={VideoA} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video className="h-full w-full rounded-lg" controls autoPlay>
          <source
            src={VideoB}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Footer */}
      <div className="bg-black opacity-60">
        <Footer />
        <ScrollButton />
      </div>
    </div>
  );
}
