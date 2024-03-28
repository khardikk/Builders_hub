import React from 'react';

import ellipseleft from '../assets/ellipseleft.png';
import ellipseright from '../assets/ellipseright.png';

const Contact = () => {
  return (
    <>
      <div
        data-aos="fade-up" data-aos-duration="1500"className="bg-neutral-900 rounded-3xl ring-1 ring-neutral-500 w-1200 h-620 my-10 mt-[5rem] max-sm:mr-4 max-sm:ml-4 max-md:mr-4 "style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
      >

        <div id='contact-section' style={{ textAlign: 'center' }}>
        <img src={ellipseleft}  className='max-[480px]:z-[-1]' style={{ position: 'absolute',top: 0,left: 0,}}></img>

          <div className='flex flex-col items-center justify-center my-20 w-[602px] max-[480px]:w-[18rem]'>
            <div style={{ marginBottom: '20px' }}>
              <h1 className='font-Inter font-bold text-5xl mt-6 mb-6'> Let's Talk</h1>
              <p className='font-Inter font-normal text-lg text-zinc-400 w-full max-[480px]:w-[18rem]'>Interested in working together or have a question? Feel free to reach out to any of us on our <b>Social Links</b> provided above. We  Believe in collaboration and in helping out fellow builders.
                Let’s turn your ideas into amazing realities. Builders keep Building.</p>
            </div>

          </div>
          <img src={ellipseright} className='max-[480px]:z-[-1]' style={{ position: 'absolute',bottom: 0,right: 0,}}></img>
        </div>
      </div>
    </>
  );
};

export default Contact;
