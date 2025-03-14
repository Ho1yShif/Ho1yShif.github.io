"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import { FaUserCheck } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const About = () => {
  const [isAbout, setIsAbout] = useState(false);

  const aboutRef = useRef();
  const profile2Ref = useRef();
  const aboutInfoRef = useRef();
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2021;
  

  // Scroll Animation
  useEffect(() => {
    if (aboutRef.current) {
      const getScreenWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const aboutObserver = new IntersectionObserver(
        ([aboutEntry]) => {
          setIsAbout(aboutEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      aboutObserver.observe(aboutRef.current);

      if (isAbout) {
        profile2Ref.current.classList.add("slide-in");
        aboutInfoRef.current.classList.add("slide-in");
      } else {
        profile2Ref.current.classList.remove("slide-in");
        aboutInfoRef.current.classList.remove("slide-in");
      }
    }
  }, [isAbout, aboutRef]);

  return (
    <Fragment>
      <section
        className=' shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden'
        id='about'
        ref={aboutRef}
      >
        <h2 className='text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3'>
          <FaUserCheck /> About Me
        </h2>
        <div className='pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]'>
          <div
            className={
              "translate-x-[-500px] transition-all opacity-0 duration-700 w-[400px] h-[500px] md:w-[400px] md:h-[500px] bg-contain m-auto md:m-0 mt-[40px] md:mt-0 bg-no-repeat"
            }
            ref={profile2Ref}
            style={{ backgroundImage: "url(/images/shif_images/Wilde.jpg)" }}
          />
          <div
            className='text-lg translate-x-[900px] opacity-0 transition-all duration-700 mt-4 md:mt-0 md:w-[50%] text-center md:text-left rounded'
            ref={aboutInfoRef}
          >
            {/* Full Name */}
            <p className='text-3xl text-center md:text-left font-semibold text-[#0c11ab] dark:text-[#0c11ab]'>
              Shifra Isaacs
            </p>
            {/* Pronouns */}
            <p className='text-center md:text-left font-semibold text-black-600'>
            (she / they)
            </p>
            {/* Profile Name */}
            <p className='text-l text-center md:text-left font-semibold text-black-600 mt-3'>
              Data Scientist | Developer Advocate | Technical Writer
            </p>

            <div className='mt-5 justify-evenly text-justify'>
              <p className='text-black-600 dark:text-black-300'>
              ​I'm a Developer Relations Advocate at Ascend.io, where I leverage my programming, writing, and business acumen to empower data engineers through automation and education. My career encompasses technical support at Sigma Computing, client-facing data science roles at Annalect and JPMorgan Chase, technical writing for Crash Course and DataLemur, and analytics reporting at Prose.
              </p>
              <br></br>
              <p>
              When I'm not programming, you can find me writing, cooking, listening to music, spending time with friends, or planning my next trip. Thanks for taking the time to learn more about me :)
              </p>
            </div>

            {/* Location */}
            <div className='flex flex-wrap justify-center md:justify-normal gap-5'>
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#0c11ab] dark:text-[#0c11ab]'>
                    Location
                  </p>
                  <p>
                    <ImLocation />
                  </p>
                </div>
                <p className='text-center md:text-left text-black dark:text-black'>
                  San Francisco Bay Area, USA{" "}
                </p>
              </div>

              {/* Experience */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#0c11ab] dark:text-[#0c11ab]'>
                    Experience
                  </p>
                  <p>
                    <MdWork />
                  </p>
                </div>
                <p className='text-center md:text-left text-black dark:text-black'>
                {yearsOfExperience}+ Years{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );

};

export default About;
