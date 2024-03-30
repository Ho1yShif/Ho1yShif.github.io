"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";

import { TechStackData } from "@/constants/SkillsData";

const TechStack = () => {
  const [sectionData, setSectionData] = useState([]);
  const techStackRef = useRef();
  const techBoxesRef = useRef();

  useEffect(() => {
    setSectionData(TechStackData);
  }, []);

  return (
    <Fragment>
      <section
        className='shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-hidden'
        id='techStack'
        ref={techStackRef}
      >
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center items-center gap-1'>
          <FaLaptopCode /> Technical Skills
        </h2>

        <div
          className='flex min-h-[450px] py-[30px] px-[20px] md:px-[100px] flex-wrap justify-center items-center gap-5'
          ref={techBoxesRef}
        >
          {sectionData.map((tech) => {
            return tech.name === "separator" ? (
              <div style={{ width: '100%' }} key={tech.name} />
            ) : (
              <div
                className='transition-all duration-700 px-2 h-fit py-3 md:py-5 w-[120px] md:w-[150px] border border-black dark:border-white border-solid rounded flex flex-col gap-3 items-center'
                key={tech.name}
              >
                <p>{tech.icon}</p>
                <p>{tech.name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default TechStack;