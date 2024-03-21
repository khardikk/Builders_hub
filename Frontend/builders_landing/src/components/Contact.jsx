import React from 'react'
import connect from '../assets/connect.png'
import ellipseleft from '../assets/ellipseleft.png'
import ellipseright from '../assets/ellipseright.png'

const Contact = () => {
  return (
    <div id='contact-section'>
        <img src={ellipseleft}></img>
        <div>
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
<img src={ellipseright}></img>
    </div>
  )
}

export default Contact