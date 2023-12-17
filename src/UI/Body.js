import React, { useState } from "react";
import {
  GenderEquality,
  Health,
  ImgA,
  ImgB,
  ImgC,
  ImgCC,
  ImgD,
  ImgE,
  ImgF,
  ImgG,
  ImgI,
  ImgJ,
  ImgL,
  ImgM,
  ImgP,
  ImgT,
  ImgY,
  LessPriviledge,
  SkillSet,
  Sports,
  YouthsVocation,
} from "../Assets";
import "../UI/Style.css";
import { Link } from "react-router-dom";

export default function Body() {
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="flex flex-col gap-20">
        {/* About Section */}
        <div
          className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
          id="about"
        >
          <div className="mx-auto sm:text-center lg:max-w-full">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-2xl md:mx-auto uppercase">
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
              <div className="max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                  <div className="relative">
                    <img
                      className="object-cover w-full h-96 rounded-t lg:h-[100vh]"
                      src={ImgJ}
                      alt="Education"
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Goals and Objectives */}
        {/* <div className="bg-white py-10">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl px-10 md:mb-12">
            <h2 className="max-w-4xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-2xl md:mx-auto uppercase">
              Aims and objectives of emeka amadi foundation
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              The Theme of the Foundation is Eradication of poverty through
              Sports, Agriculture and Education.
            </p>
          </div>
          <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
              <svg
                viewBox="0 0 88 88"
                className="w-full max-w-screen-xl text-indigo-100"
              >
                <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                <circle
                  fillOpacity="0.2"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="44"
                />
                <circle
                  fillOpacity="0.2"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="37.5"
                />
                <circle
                  fillOpacity="0.3"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="29.5"
                />
                <circle
                  fillOpacity="0.3"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="22.5"
                />
              </svg>
            </div>
            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <p className="mb-2 font-bold">
                    Sports || Agriculture || Education
                  </p>
                  <p className="text-sm leading-5 text-gray-900">
                    To eradicate poverty through sports, agriculture and
                    education
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <p className="mb-2 font-bold">Less Privileged</p>
                  <p className="text-sm leading-5 text-gray-900">
                    To cater for the less privileged in our society
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <p className="mb-2 font-bold">Youths Vocation</p>
                  <p className="text-sm leading-5 text-gray-900">
                    To encourage the youths to take up a vocation
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <p className="mb-2 font-bold">Skillsets</p>
                  <p className="text-sm leading-5 text-gray-900">
                    To identify talents and upgrade their skills in their chosen
                    vocation
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <p className="mb-2 font-bold">Gender Equality</p>
                  <p className="text-sm leading-5 text-gray-900">
                    To encourage gender equality in any vocation
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <p className="mb-2 font-bold">Health Advice</p>
                  <p className="text-sm leading-5 text-gray-900">
                    to encourage the youth to take care of their health
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>
            </div>
          </div>
        </div> */}

        {/* G and O */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative uppercase">
                  Aims and objectives of emeka amadi foundation
                </span>
              </span>{" "}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              The Theme of the Foundation is Eradication of poverty through
              Sports, Agriculture and Education.
            </p>
          </div>
          <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
            <a
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img src={Sports} alt="Sports, Agriculture and Education" />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      Sports || Agriculture || Education
                    </h6>
                    <p className="text-sm text-gray-900">
                      To eradicate poverty through sports, agriculture and
                      education
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img src={LessPriviledge} alt="Less Privileged" />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      Less Privileged
                    </h6>
                    <p className="text-sm text-gray-900">
                      To cater for the less privileged in our society
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img src={YouthsVocation} alt="Youths Vocation" />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      Youths Vocation
                    </h6>
                    <p className="text-sm text-gray-900">
                      To encourage the youths to take up a vocation
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img src={SkillSet} alt="Skillsets" />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">Skillsets</h6>
                    <p className="text-sm text-gray-900">
                      To identify talents and upgrade their skills in their
                      chosen vocation
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img src={GenderEquality} alt="Gender Equality" />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      Gender Equality
                    </h6>
                    <p className="text-sm text-gray-900">
                      To encourage gender equality in any vocation
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img src={Health} alt="Health Advice" />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      Health Advice
                    </h6>
                    <p className="text-sm text-gray-900">
                      to encourage the youth to take care of their health
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Core Values */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8 sm:gap-20">
            {/* Vision */}
            <div>
              <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none md:mb-6 group">
                <span className="inline-block mb-1 sm:mb-4">Our Vision</span>
                <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
              </h2>
              <p className="text-gray-700 lg:text-sm lg:max-w-md">
                Empowering Lives and Transforming Communities, creating a Future
                Without Poverty
              </p>
            </div>
            {/* Mission */}
            <div>
              <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none md:mb-6 group">
                <span className="inline-block mb-1 sm:mb-4">Our Mission</span>
                <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
              </h2>
              <p className="text-gray-700 lg:text-sm lg:max-w-md">
                Dedicated to pioneering sustainable change, the Emeka Amadi
                Foundation is on a mission to eradicate poverty through dynamic
                initiatives in sports, agriculture, and education. We strive to
                uplift the less privileged, empower youth, and cultivate a
                society where talents flourish, skills are honed, and health is
                a priority.
              </p>
            </div>
          </div>
          <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
            <a aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={ImgP}
                  alt="Passion for Impact"
                />
                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                  <h2 className="max-w-lg mb-2 font-sans text-2xl font-bold tracking-tight text-mainColor sm:text-2xl sm:leading-none md:mb-2 group">
                    <span className="inline-block mb-1 sm:mb-2">
                      Passion for Impact
                    </span>
                    <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                  </h2>
                  <p className="text-sm font-medium tracking-wide text-white">
                    Fueled by a relentless passion to make a positive
                    difference, we drive meaningful change in the lives of
                    individuals and communities.
                  </p>
                </div>
              </div>
            </a>
            <a aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={ImgCC}
                  alt="Integrity and Transparency"
                />
                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                  <h2 className="max-w-lg mb-2 font-sans text-2xl font-bold tracking-tight text-mainColor sm:text-2xl sm:leading-none md:mb-2 group">
                    <span className="inline-block mb-1 sm:mb-2">
                      Integrity and Transparency
                    </span>
                    <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                  </h2>
                  <p className="text-sm font-medium tracking-wide text-white">
                    We uphold the highest standards of integrity, ensuring
                    transparency in all our actions and commitments.
                  </p>
                </div>
              </div>
            </a>
            <a aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={ImgT}
                  alt="Innovation and Excellence"
                />
                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                  <h2 className="max-w-lg mb-2 font-sans text-2xl font-bold tracking-tight text-mainColor sm:text-2xl sm:leading-none md:mb-2 group">
                    <span className="inline-block mb-1 sm:mb-2">
                      Innovation and Excellence
                    </span>
                    <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                  </h2>
                  <p className="text-sm font-medium tracking-wide text-white">
                    Embracing innovation, we pursue excellence in every
                    endeavor, constantly seeking new ways to enhance our impact.
                  </p>
                </div>
              </div>
            </a>
            <a aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={ImgY}
                  alt="Collaboration and Inclusivity"
                />
                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                  <h2 className="max-w-lg mb-2 font-sans text-2xl font-bold tracking-tight text-mainColor sm:text-2xl sm:leading-none md:mb-2 group">
                    <span className="inline-block mb-1 sm:mb-2">
                      Collaboration and Inclusivity
                    </span>
                    <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                  </h2>
                  <p className="text-sm font-medium tracking-wide text-white">
                    We believe in the strength of collaboration and inclusivity,
                    working hand-in-hand with diverse stakeholders to create
                    lasting solutions.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* What we do Section */}
        <div className="flex flex-col gap-2 mt-20" id="whatwedo">
          <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-2xl md:mx-auto uppercase">
              What We Do
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            At Emeka Amadi Foundation, we engage in various initiatives focused on empowering communities and supporting meaningful change.
            </p>
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

        {/* About Founder */}
        <div
          className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
          id="about"
        >
          <div className="mx-auto sm:text-center lg:max-w-full">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-2xl md:mx-auto uppercase">
                About The Founder
              </h2>
            </div>
            <div className="mb-4 transition-shadow duration-300 lg:mb-6">
              <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
                <div className="transition duration-300 transform bg-white rounded hover:-translate-y-1 hover:shadow md:text-center">
                  <div className="relative">
                    <img
                      className="object-cover w-full h-96 rounded-t lg:h-[100vh]"
                      src={ImgG}
                      alt="Education"
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                  </div>
                </div>
                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                  <div className="relative">
                    <img
                      className="object-cover w-full h-64 rounded-t lg:h-[100vh]"
                      src={ImgA}
                      alt="Humanitarian"
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:gap-2 sm:gap-4">
              <p className="max-w-[1030px] mb-4 text-base lg:text-justify text-gray-700 sm:mx-auto">
                Emeka Amadi (MFR) is a native of Affa in Enugu State of Nigeria,
                He attended Sacred Heart Seminary Nsude and St John's Cross
                Seminary Isienu-Nsukka where he developed the art of helping and
                supporting the poor in the society.
              </p>
              <p className="max-w-[1030px] mb-4 text-base lg:text-justify text-gray-700 sm:mx-auto">
                He was an Ex-Nigeria international Goalkeeper-Saudi Arabia 89
                (nicknamed "The Damman miracle“) and the National under 17/20
                coach that won U-17 FIFA world cup Gold medal in 2013 and 2015.
              </p>
              <p className="max-w-[1030px] mb-4 text-base lg:text-justify text-gray-700 sm:mx-auto">
                Coach EMEKA is a CAF ( Conferderation of African Football)
                Instructor and the first Head of Goalkeeping department in
                Nigeria Football Federation. Additionally, he is a social worker
                in Germany. 
              </p>
              <p className="max-w-[1030px] mb-4 text-base lg:text-justify text-gray-700 sm:mx-auto">
                He also worked as a football coach in Sudan, Germany,Tanzania
                and Zambia and Nigeria. In 2013, he was awarded the "Member of
                the order of the  Federal Republic" (MFR) by President Goodluck
                Ebere Jonathan for his Excellence in Sports and youth
                developement in Nigeria. Together with an executive team, he is
                passionate about helping the less privileged through sports and
                youth development.
              </p>
            </div>
          </div>

          {/* Mentions */}
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1100px] md:px-24 lg:px-8 lg:py-20">
            <div className="grid max-w-screen-lg gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">
              <a
                href="https://www.cz.de/Sport/Fussball-regional/Toni-Amadi-Vom-Kult-Keeper-in-Celle-zum-Weltmeister-in-Nigeria"
                aria-label="View item"
                title="View item"
                className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
              >
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
                  <div className="pr-4">
                    <h6 className="mb-2 font-semibold leading-5">
                      Toni Amadi: From Goal keeper in Celle to world champion in
                      Nigeria
                    </h6>
                    <p className="text-sm text-gray-900">
                      He was the crowd favorite during the glorious regional
                      league times at TuS Celle FC: Toni Amadi, who became a
                      cult keeper..{" "}
                      <span className="text-mainColor">Read More</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </div>
                </div>
              </a>
              <a
                href="https://www.cz.de/Sport/Fussball-regional/Toni-Amadi-foerdert-Strassenkinder"
                aria-label="View item"
                title="View item"
                className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
              >
                <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
                  <div className="pr-4">
                    <h6 className="mb-2 font-semibold leading-5">
                      Toni Amadi supports street children
                    </h6>
                    <p className="text-sm text-gray-900">
                      Toni Amadi, former goalkeeper at TuS Celle FC, is fighting
                      to get children and young people off the streets in
                      Nigeria and to protect them from crime...
                      <span className="text-mainColor">Read More</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="overflow-hidden bg-mainColor">
          <div className="px-4 py-16 mx-auto sm:max-w-[1050px] md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
                    <form
                      action="mailto:info@emekaamadifoundation.org"
                      method="post"
                      enctype="text/plain"
                    >
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
