import React from "react";
import { DarkLogo, Logo, eafLogo } from "../Assets";

export default function Footer() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-7xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-20">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="EAF"
            title="EAF"
            class="inline-flex items-center"
          >
            <img src={eafLogo} alt="Logo" className="w-32 text-white" />
          </a>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            Information
          </p>
          <div className="flex">
            <p className="mr-1 text-white">Phone:</p>
            <a
              href="tel: +(234)806-564-2594"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-white hover:text-deep-purple-800"
            >
              +(491)-521-687-9680,
              +(234)806-564-2594 
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Email:</p>
            <a
              href=" info@emekaamadifoundation.org"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-white hover:text-deep-purple-800"
            >
              info@emekaamadifoundation.org
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-white hover:text-deep-purple-800"
            >
              16 Ademola Adetokunbo crescent, Wuse 2, Abuja, Nigeria
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-white">
            Socials
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="flex items-center justify-center mb-3 rounded-full bg-mainColor border-white border-2 p-2"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACCElEQVR4nO2WT0iUURTFPyvUkhAdMTBpYStBQsqNgQqWLVyIEBG6cNGilYKbUHARFCJBIIGC4EJRISIEMVAEF4rgohZKIP4DKzRBIxVc2P+fXDoDT3HGz5lvNuXZDPe8e9557819932ed4r/DkA1kdFzgnnapdkBCvyKBqKY3/Whf6jcH8Atv4s1YTrwSeImcQ2KN4FLUbSVwE/gD1Dn2zQM4LbE34BrQBIwKvMh7wgA14Fd5Tz2YgXQqUlmgWTgMrAl7sBuNLaqsZe20HiMLwCLmqxVXJ1TNFfEXdTiDJNASsymYQDFwC/gN1Ai7rVMxnUSY4rngQwvKABtmnhJp5ANbIh7r1+L8wIzNWhX4aPsEFflXLE94KaXCPC3sr+r0ivE9cp4BjiXEGMD0CyjNSBT9/2juBYvUQDOqGoN/eLKdQrWNIoSZZwJLDj/7T3xLxTPAalBm6Y4u/3itk9VenhBz4I0TQL6NPFnaxzAiOJh5dzQo2D3vSwo4ycysT5cKC4H+Cr+gbinilesm8VrWqPise5VdWis1lnQVbtSwFtxXfGYlup1MtRHyHml8SlVfb4aiqEyFtN85yV6HiUvBKwrr1HcI8XGh05imgUsS/wGOHtM/h3n7S7QziekH/Rreh6YlugdkOZT101k3D9ObCsdVPKHaJ84R2jTnFM6jG0g1+9cp/g3sA/XA4wT9mOC7gAAAABJRU5ErkJggg=="
                className="w-5 h-5"
              />
            </a>
            <a
              href="/"
              className="flex items-center justify-center mb-3 rounded-full bg-mainColor border-white border-2 p-2"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO2aPWsUURSGrxoFxSSmS2JhJVpoFRG0t4qYKrG1SOEPSCJYiKDYKDb6CywFtRMEV0QRgim0iqBgYVBQJCRRkoiaR87yBoZhZ3J3Zid7B+9TJee83HvevR8zmxPnIpFIIYCzQAP4Sff5oVpG2zVxnXC51s5KGOvAFDDkugwwBEyrJrxWBngm8ZQLDGBGtTV8xLYfjUEXGMCgalvxETdxgYJvff+FEeAU8Bj4CnwBHgHHqii4MiO6zf60uA7XgBFXIyNvlbJnzAFgv93pij2tqvAqjCwrtS8R6/O+RQIy8lypG0C/TFxVbLaqwqswMgKstjgj9rQ94Wp2ax0G7gGfgM+1vLVCgQ5srVdk89JHA+wGzgMPgAVtyyXdiLeAo9thJBcfDfBui/xv4DbQU7mRvLjnhzAPTAKHgD1AL3AauAv8kuYhsDNEI/b03wCuZBUo3Ungm4aZCdHIODCR+H1XzvxnNIydnb6gjChnrzV3gO+S2UvnTdtaLbRPpLkYlBF7rQHeJM7J38TPc8DelP6CcvdDM3JZqffAcbuVdB4+tjoPwBHFP4RmxD5141wqPqb461S8X/Gl0IwsKjWQig8ovpiK71B8IzQjmZOXmS+XaMTFFWlSdme4sgMk40UmLzNfLtGIiyvSpOzOcGUHSMaLTF5mvly2GiALX02RcTttxL5zZ/HCV1Nk3I4aCQXaMLIibddbbmmAg6pt2Uds3VNj2gUGcKmd1tuoxOvq2Q1vS5X5NQ3LxOZfWfza1Il2QX3b06mVaSSao/X7h4FIJOI2+Qcr3dTGXC5RnAAAAABJRU5ErkJggg=="
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-white">
          © Copyright 2023 Emeka Amadi Foundation. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-white"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-white"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
