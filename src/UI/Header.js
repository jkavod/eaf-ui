import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/outline";
import "../UI/Style.css";
import { Carousel, Nav } from "../Constants";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="relative">
        <Nav />
      </div>
      <div className="bckgrnd">
        <Carousel />
        <div className="absolute flex justify-center items-center left-0 top-20 w-[100%] h-[100%] text-whiteShade font-bold">
          <div>
            <div className="relative isolate px-6 lg:px-8">
              <div className="mx-auto max-w-7xl py-80 lg:py-96" id="heeader">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
                <div className="text-center">
                  <h1 className="text-3xl font-bold tracking-tight text-mainColor sm:text-6xl">
                    Championing Hope: Emeka Amadi Foundation's Trailblazing
                    Quest Against Poverty
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-whiteShade">
                    In a nation marked by resilience and vibrant culture, the
                    Emeka Amadi Foundation stands tall as a beacon of hope,
                    illuminating paths toward a poverty-free future.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-mainColor px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mainColor"
                    >
                      Donate
                    </a>
                    {/* <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-mainColor"
                    >
                      Read more <span aria-hidden="true">→</span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
