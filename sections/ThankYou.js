import React from 'react';
import { FaHandsHelping } from 'react-icons/fa';

const ThankYou = () => (
  <section className='thank-you bg-white py-12'>
    <div className='container mx-auto'>
      <div className='flex flex-col items-center text-center'>
        <h2 className='text-3xl font-bold mb-4 inline-flex items-center justify-center'>
          <FaHandsHelping className='mr-2 text-primary' />
          Acknowledgments
        </h2>
        <p className='mb-6 text-lg'>I would like to thank the following people for their valuable support and mentorship in my career:</p>
        <div className='mx-auto flex flex-col items-center text-center text-lg'>
          <p className='mb-4'><a href='https://www.linkedin.com/in/rachel-cappell-cpa-a154474/' target='_blank' rel='noopener noreferrer'>Rachel Cappell</a></p>
          <p className='mb-4'><a href='https://www.zackovits.com/' target='_blank' rel='noopener noreferrer'>Zack Ovits</a></p>
          <p className='mb-4'><a href='https://www.linkedin.com/in/nick-singh-tech/' target='_blank' rel='noopener noreferrer'>Nick Singh</a></p>
          <p className='mb-4'><a href='https://www.linkedin.com/in/constant-dugast-887b15a4/' target='_blank' rel='noopener noreferrer'>Constant Dugast</a></p>
          <p><a href='https://www.linkedin.com/in/brianrisk/' target='_blank' rel='noopener noreferrer'>Brian Risk</a></p>
        </div>
      </div>
    </div>
  </section>
);

export default ThankYou;