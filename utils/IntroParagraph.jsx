import React from 'react';

const IntroParagraph = () => (
  <div>
    <p className='py-2 text-2xl md:text-4xl font-semibold font-sans'>
      Hi there, I'm Shif 🤝
    </p>
    {/* Profile Name */}
    <p className='text-2xl md:text-4xl py-2 font-semibold font-sans'>
      I&apos;m a
      <span className='text-[#0c11ab] dark:text-[#0c11ab]'>
        {" "}
        Data<span className='text-white'>|</span>
      </span>
      Scientist,
      <span className='text-[#0c11ab] dark:text-[#0c11ab]'>
        {" "}
        Data<span className='text-white'>|</span>
      </span>
      Analyst,
      <br></br>
      Technical
      <span className='text-[#0c11ab] dark:text-[#0c11ab]'>
        {" "}
        Writer,<span className='text-white'>|</span>
      </span>
      and
      <span className='text-[#0c11ab] dark:text-[#0c11ab]'>
        {" "}
        Educator<span className='text-white'>|</span>
      </span>
    </p>
  </div>
);

export default IntroParagraph;
