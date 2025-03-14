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
    <span className='text-[#0c11ab] dark:text-[#0c11ab]'></span>
    <p className='py-2 text-center'>
      <span className='text-[#0c11ab] dark:text-[#0c11ab]'>
        Developer
      </span>
      {' '} Advocate,
    </p>
    <p className='py-2 text-center'>
    and
      Technical {' '}
      <span className='text-[#0c11ab] dark:text-[#0c11ab]'>
        Writer {' '}
      </span>
      
    </p>
  </div>
);

export default IntroParagraph;
