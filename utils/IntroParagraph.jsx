import React from 'react';

const IntroParagraph = () => (
  <div className='text-2xl md:text-4xl font-semibold font-sans text-centers mx-auto' style={{ maxWidth: '800px' }}>
    <p className='py-2 text-center'>
        Hi there, I'm Shif 🤝
    </p>
    <p className='py-2 text-center'>
      I'm a {' '}
      <span className='text-[#0c11ab] dark:text-[#0c11ab]'>
        Data 
      </span>
    {' '} Scientist,
    </p>
    <p className='py-2 text-center'>
      Technical {' '}
      <span className='text-[#0c11ab] dark:text-[#0c11ab]'>
        Writer, {' '}
      </span>
      and
    </p>
    <p className='py-2 text-center'>
      Support {' '}
      <span className='text-[#0c11ab] dark:text-[#0c11ab]'>
         Engineer
      </span>
    </p>
  </div>
);

export default IntroParagraph;
