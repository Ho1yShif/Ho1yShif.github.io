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
        <title>Shifra&apos;s Portfolio</title>
      </Head>
      <section id='home' ref={homeRef}>
        <div
          className='min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] lg:px-[200px] pt-[80px] md:pt-0 md:flex items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm flex-col md:flex-row'
        >
          <div
            className='translate-x-[-500px] transition-all duration-700 opacity-0 order-1 md:order-1'
            ref={introRef}
          >
            <IntroParagraph />
          </div>

            {/* Image */}
            <div
            className={
              "translate-x-[100px] transition-all opacity-0 duration-700 w-[180px] h-[500px] md:w-[400px] md:h-[400px] bg-contain m-auto md:m-0 mt-[40px] md:mt-0 bg-no-repeat order-2 md:order-2"
            }
            ref={profileRef}
            style={{ backgroundImage: "url(/images/shif_images/Circle_Headshot.svg)" }}
          />

          <div className='order-3' style={{ marginTop: '3em' }}>
            <SocialMedia className="max-w-xs flex flex-wrap justify-between md:max-w-full" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;