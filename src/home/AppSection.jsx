import React from 'react'
import { Link } from 'react-router-dom';

const btnText = "Sign up for free";
const title = "Shop Anytime, Anywhere";
const desc = "Shop on any device with our app. Download and install it right away"

const AppSection = () => {
  return (
    <div className='app-section padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
                <Link to='/sign-up' className='lab-btn mb-4'>{btnText}</Link>
                <p>{desc}</p>
            </div>
            <div className='section-wrapper'>
                <ul className='lab-ul'>
                    <li><a href='#'><img src='assets/images/app/01.jpg'/></a></li>
                    <li><a href='#'><img src='assets/images/app/02.jpg'/></a></li>
                </ul>
            </div>

        </div>
      
    </div>
  )
}

export default AppSection
