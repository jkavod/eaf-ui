import { useState, useEffect } from "react";
import { eafLogo } from "../Assets";
import "../UI/Style.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Replace or toggle classes based on scroll position
      if (scrollPosition > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Add scroll event listener to call handleScroll function
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`bg-mainColor absolute top-0 w-full z-[100] ${
          hasScrolled ? "hidden" : ""
        }`}
      >
        <div className="flex items-center justify-end px-3 mt-1 space-x-3">
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
      <div
        className={`bg-${hasScrolled ? "white" : "transparent"} ${
          hasScrolled ? "text-black" : "text-white"
        } fixed top-0 w-full z-50 ${hasScrolled ? "" : "mt-12"}`}
      >
        <div className="px-3 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-3 sm:px-14">
          <div className="relative flex items-center justify-between">
            <Link
              to={"/"}
              aria-label="AgricInuit"
              title="AgricInuit"
              class="inline-flex items-center"
            >
              <img
                src={eafLogo}
                alt="Logo"
                className="w-32 text-teal-accent-400"
              />
            </Link>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to={"/"}
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-green transition duration-200 focus:shadow-outline focus:outline-none"
                  aria-label="Home"
                  title="Home"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#whatwedo"
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-green transition duration-200 focus:shadow-outline focus:outline-none"
                  aria-label="What We Do"
                  title="What We Do"
                >
                  What we do
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-green transition duration-200 focus:shadow-outline focus:outline-none"
                  aria-label="About Us"
                  title="About Us"
                >
                  About Us
                </a>
              </li>

              <li>
                <Link
                  to={"/media"}
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-green transition duration-200 focus:shadow-outline focus:outline-none"
                  aria-label="Media"
                  title="Media"
                >
                  Media
                </Link>
              </li>
            </ul>
            {/* <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to={"/donate"}
                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-green transition duration-200 rounded shadow-md border-mainColor hover:bg-mainColor hover:border-whiteShade hover:text-white border-2 focus:shadow-outline focus:outline-none"
                aria-label="Donate"
                title="Donate"
              >
                Donate
              </Link>
            </li>
          </ul> */}
            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className={`w-5 transition-colors ${hasScrolled ? 'text-black' : 'text-white'}`} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full">
                  <div class="p-5 bg-white border rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          to={"/"}
                          aria-label="Company"
                          title="Company"
                          class="inline-flex items-center"
                        >
                          <img
                            src={eafLogo}
                            alt="Logo"
                            className="w-20 text-white"
                          />
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        <li>
                          <Link
                            to={"/"}
                            aria-label="Home"
                            title="Home"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <a
                            href="#whatwedo"
                            aria-label="What We Do"
                            title="What We Do"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            What we do
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#about"
                            aria-label="About"
                            title="About"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <Link
                            to={"/media"}
                            aria-label="Media"
                            title="Media"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Media
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
