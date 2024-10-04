import React from 'react'
import prince from '../assets/images/Prince.jpeg'
import yash from '../assets/images/Yash.jpeg'
import team from '../assets/images/Team.jpeg'

const About = () => {
  return (
    <div className='container'>
      <div className='about-main'>
        <div className='about-text'>
          <h3>About us</h3>
          <h1>Hey! We're FoodFrenzy and we help restaurant</h1>
          <img src="https://media.istockphoto.com/id/1081790292/vector/restaurant-staff-characters-design-include-chef-assistants-manager-waitress-professionals.jpg?s=612x612&w=0&k=20&c=WwuLspU3iOpCZx12KtjVZ89H_sXZBN0BDqBVuIJov7M="/>
        </div>

        <div className='pepole'>
          <h2>People Behind FoodFrenzy </h2>
          <p>Meet the masterminds that pulled all-nighters to make the dream happen</p>
        </div>

        <div className='about-img'>
          <div className='ceo'>
            <img src={prince}/>
            <h4>Prince Kansagra</h4>
            <p>Co-founder & CEO</p>
          </div>
          <div className='pune'>
            <img src={yash}/>
            <h4>Yash Parikh</h4>
            <p>Co-founder & CSO</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About