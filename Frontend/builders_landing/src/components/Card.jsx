import React from 'react'
import projectimg from '../assets/projectimg.png'
import stack from '../assets/stack.png'

const Card = () => {
  return (
    <div>
        <div>
        <h1>Cashflow</h1>
        <span>2024-Fullstack</span>
        <p>It is a web application that helps you to track your expenses and income. 
          It is a full-stack application that is built using React, Node.js, Express, and MongoDB.</p>
        <img src={stack}></img>
        <button>Read case study</button>
        </div>
        <div>
            <img src={projectimg} alt="cashflow" className="w-full h-96 object-cover"/>
        </div>
    </div>
  )
}

export default Card