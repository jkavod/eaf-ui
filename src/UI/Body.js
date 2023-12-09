import React, { useState } from "react";
import { ImgA, ImgF, ImgG, ImgI, ImgL, ImgM } from "../Assets";
import "../UI/Style.css";
import { Link } from "react-router-dom";

export default function Body() {
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="flex flex-col gap-20">
        {/* What we do Section */}
        <div className="flex flex-col gap-5 mt-20" id="whatwedo">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-4xl text-center uppercase">
              What we do
            </h1>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
              <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                <div className="relative">
                  <img
                    className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                    src={ImgF}
                    alt="Education"
                  />
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                </div>
                <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                  <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl uppercase">
                    Education
                  </h5>
                  <p className="mb-5 text-gray-700">
                    In a bid to provide access to quality education, the
                    foundation has paid school fees for some students in Primary
                    and secondary schools in Nigeria.
                  </p>
                </div>
              </div>
              <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                <div className="relative">
                  <img
                    className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                    src={ImgI}
                    alt="Humanitarian"
                  />
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                </div>
                <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                  <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl uppercase">
                    Humanitarian Assistance
                  </h5>
                  <p className="mb-5 text-gray-700">
                    In line with our commitment to enhancing the lives of
                    citizens we donated cash and pallatives during the{" "}
                    <span className="uppercase">Covid-19</span> pandemic.
                  </p>
                </div>
              </div>
              <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                <div className="relative">
                  <img
                    className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                    src={ImgM}
                    alt="Health"
                  />
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                </div>
                <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                  <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl uppercase">
                    Health Care Support
                  </h5>
                  <p className="mb-5 text-gray-700">
                    We provide medical support and conduct several medical
                    outreach programs to hospitals and organizations.
                  </p>
                </div>
              </div>
              <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                <div className="relative">
                  <img
                    className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                    src={ImgL}
                    alt="Sports"
                  />
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                </div>
                <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                  <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl uppercase">
                    Sport Development
                  </h5>
                  <p className="mb-5 text-gray-700">
                    The foundation has organized and funded several sports
                    programs in Abuja and Nsukka. We have also sponsored players
                    within and outside the country.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul className="flex justify-center items-center">
              <li>
                <Link
                  to={"/media"}
                  aria-label="Media"
                  title="Media"
                  class="font-bold tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400 bg-mainColor px-10 py-5 rounded-2xl hover:opacity-90"
                >
                  View Our Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* About Section */}
        <div
          className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
          id="about"
        >
          <div className="mx-auto sm:text-center lg:max-w-7xl">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto uppercase">
                About Us
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Emeka Amadi Foundation (EAF) is a reputable indigenous non-for
                profit organization that promotes access to quality health care
                and the eradication of poverty through Sports, Agriculture and
                Education.
              </p>
            </div>
            <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
              <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                  <div className="relative">
                    <img
                      className="object-cover w-full h-96 rounded-t lg:h-[100%] xl:h-96"
                      src={ImgG}
                      alt="Education"
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                  </div>
                </div>
                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                  <div className="relative">
                    <img
                      className="object-cover w-full h-64 rounded-t lg:h-[100%] xl:h-96"
                      src={ImgA}
                      alt="Humanitarian"
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
                Emeka Amadi, the CEO of the Foundation, is an ex-international
                footballer and a current CAF instructor.
              </p>
              <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
                Together with an executive team, he is passionate about helping
                the less privileged through sports and youth development. In
                2023, he recieved the MFR award from ex-President Goodluck
                Johnathan for his outstanding contribution to humanity.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="overflow-hidden bg-mainColor">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-center xl:flex-row">
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="relative">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                  >
                    <defs>
                      <pattern
                        id="766323e1-e594-4ffd-a688-e7275079d540"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl capitalize text-center">
                      Let us know how we may be of assistance
                    </h3>
                    <form>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="firstName"
                          className="inline-block mb-1 font-medium"
                        >
                          First name
                        </label>
                        <input
                          placeholder="John"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="firstName"
                          name="firstName"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="lastName"
                          className="inline-block mb-1 font-medium"
                        >
                          Last name
                        </label>
                        <input
                          placeholder="Doe"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="lastName"
                          name="lastName"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="email"
                          className="inline-block mb-1 font-medium"
                        >
                          E-mail
                        </label>
                        <input
                          placeholder="john.doe@example.org"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="email"
                          name="email"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="Message"
                          className="inline-block mb-1 font-medium"
                        >
                          Message
                        </label>
                        <input
                          placeholder="Enter your message"
                          required
                          type="text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="flex-grow w-full h-20 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="Message"
                          name="Message"
                        />
                      </div>
                      <div className="mt-4 mb-2 sm:mb-4">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-mainColor hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none capitalize"
                        >
                          Send a Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
