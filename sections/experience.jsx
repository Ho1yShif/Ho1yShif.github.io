"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { MdWork } from "react-icons/md";
import { BsArrowDownCircle } from "react-icons/bs";

import { ExperienceData } from "@/constants/ExperienceData";

const Experience = () => {
  const [desc, setDesc] = useState("");
  const [isExpe, setIsExpe] = useState(false);
  const expeRef = useRef();
  const expeBoxesRef = useRef();

  useEffect(() => {
    const expeObserver = new IntersectionObserver(
      ([expeEntry]) => {
        setIsExpe(expeEntry.isIntersecting);
      },
      {
        rootMargin: "-100px",
      }
    );

    expeObserver.observe(expeRef.current);

    if (isExpe) {
      expeBoxesRef.current.classList.add("pop-up-child");
    } else {
      expeBoxesRef.current.classList.remove("pop-up-child");
    }
  }, [isExpe]);

  return (
    <Fragment>
      <section id='experience' ref={expeRef}>
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center items-center gap-3'>
          <MdWork /> Experience
        </h2>

        <div
          className='pop-down-child pb-[30px] px-[20px] shadow-sm shadow-zinc-300 dark:shadow-zinc-700'
          ref={expeBoxesRef}
        >
          {ExperienceData.map((experience, index) => (
      <div
        className={`md:flex gap-2 items-center transition-all duration-500 ${
          index !== 0 ? "mt-7" : ""
        } justify-center`}
        key={experience.organization}
      >
        <div
          className='md:w-[50%] cursor-pointer p-3 border border-zinc-300 dark:border-zinc-700 shadow-zinc-300 dark:shadow-zinc-700 shadow-sm rounded'
          onClick={() =>
            setDesc(
              desc === experience.description
                ? ""
                : experience.description
            )
          }
        >
          <div className='flex justify-between gap-2'>
            <p className='text-xl md:text-2xl font-bold text-[#0c11ab]'>
              {experience.organization}
            </p>
          </div>

          <div className='flex justify-between text-black-600 dark:text-black gap-2 mt-2'>
            <p className='font-semibold'>{experience.role}</p>
            <p>{experience.from_date} – {experience.to_date}</p>
          </div>

          <div
            className='mt-2 text-justify transition-all duration-500 overflow-hidden text-black dark:text-black'
            style={
              desc == experience.description
                ? { maxHeight: "400px" }
                : { maxHeight: "0px" }
            }
          >
            {experience.description.split('\n').map((line, i) => (
            <p key={i}>
              {line}
            </p>
          ))}
          </div>

          {/* Career Track */}
          <div className='flex flex-wrap gap-2 mt-4'>
            {experience.career_track.map((track) => (
              <p
                className='px-1 text-sm rounded bg-[#0c11ab] text-white'
                key={track}
              >
                {track}
              </p>
            ))}
          </div>

        </div>
        <button
          className='transition-all duration-500 hidden md:block'
          onClick={() =>
            setDesc(
              desc === experience.description
                ? ""
                : experience.description
            )
          }
          style={
            desc === experience.description
              ? { transform: "rotate(180deg)" }
              : {}
          }
        >
          <BsArrowDownCircle size={22} />
        </button>
      </div>
    ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Experience;
