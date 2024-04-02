import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import SocialMedia from "@/utils/SocialMedia";
import IntroParagraph from "@/utils/IntroParagraph";

// Function to get screen width
const getScreenWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const Intro = () => {
  const [isHome, setIsHome] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();

  // Intersection observer animation on scroll
  useEffect(() => {
    // Scroll Animation
    if (homeRef.current) {
      const homeObserver = new IntersectionObserver(
        ([homeEntry]) => {
          setIsHome(homeEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      homeObserver.observe(homeRef.current);

      if (isHome) {
        profileRef.current.classList.add("slide-in");
        introRef.current.classList.add("slide-in");
      } else {
        profileRef.current.classList.remove("slide-in");
        introRef.current.classList.remove("slide-in");
      }
    }
  }, [isHome]);

  return (
    <Fragment>
      <Head>
        <title>Shifra's Portfolio</title>
      </Head>
      <section id='home' ref={homeRef} className="pt-20">
        <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
          <div
            className='translate-x-[-500px] transition-all duration-700 opacity-0 order-1 md:order-1'
            ref={introRef}
          >
            <IntroParagraph />
          </div>

          {/* Image */}
          <div
            className={
              "translate-x-[100px] transition-all opacity-0 duration-700 w-full md:w-[400px] h-[300px] md:h-[400px] bg-contain bg-no-repeat order-2 md:order-2 self-center"
            }
            ref={profileRef}
            style={{ backgroundImage: "url(/images/shif_images/Circle_Headshot.svg)" }}
          />
          </div>

        <div className='order-3 md:order-last mt-5 md:mt-0'>
          <SocialMedia className="max-w-xs flex flex-wrap justify-between md:max-w-full sm:text-sm" />
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;