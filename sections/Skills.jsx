"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";

import { SkillsData } from "@/constants/SkillsData";

const Skills = () => {
  const [sectionData, setSectionData] = useState([]);
  const skillStackRef = useRef();
  const skillBoxesRef = useRef();

  useEffect(() => {
    setSectionData(SkillsData);
  }, []);

  return (
    <Fragment>
      <section
        className='shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-hidden'
        id='skills'
        ref={skillStackRef}
      >
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center items-center gap-1'>
          <FaLaptopCode /> Technical Skills
        </h2>

        <div
          className='flex min-h-[450px] py-[30px] px-[20px] md:px-[100px] flex-wrap justify-center items-center gap-5'
          ref={skillBoxesRef}
        >
          {sectionData.map((skill) => {
            return skill.name === "separator" ? (
              <div style={{ width: '100%' }} key={skill.name} />
            ) : (
              <div
                className='transition-all duration-700 px-2 h-fit py-3 md:py-5 w-[120px] md:w-[150px] border border-black dark:border-white border-solid rounded flex flex-col gap-3 items-center'
                key={skill.name}
              >
                <p>{skill.icon}</p>
                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Skills;