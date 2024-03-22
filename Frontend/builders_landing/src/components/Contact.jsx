import React from 'react';
import connect from '../assets/connect.png';
import ellipseleft from '../assets/ellipseleft.png';
import ellipseright from '../assets/ellipseright.png';

const Contact = () => {
  return (
    <>
      <div
        data-aos="fade-up" data-aos-duration="1500"className='bg-neutral-900 rounded-3xl ring-1 ring-neutral-500 w-1200 h-620 my-10 mt-[5rem]'style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
      >

        <div id='contact-section' style={{ textAlign: 'center' }}>
          <img src={ellipseleft}></img>
          <div>
            <div style={{ marginBottom: '20px' }}>
              <h1> Let's Talk</h1>
              <p>Interested in working together or have a question? Feel free to reach out. We  Believe in collaboration and in helping out fellow builders.
                Let’s turn your ideas into amazing realities. Builders keep Building.</p>
            </div>
            <div>
              <div>
                <img src={connect}></img>
              </div>
              <div>
                <img src={connect}></img>
              </div>
              <div>
                <img src={connect}></img>
              </div>
              <div>
                <img src={connect}></img>
              </div>
            </div>
          </div>
          <img src={ellipseright} style={{ position: 'absolute',bottom: 0,right: 0,}}></img>
        </div>
      </div>
    </>
  );
};

export default Contact;
