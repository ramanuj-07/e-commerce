import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  return (
      <div className='descriptionbox'>
          <div className="descriptionbox-navigator">
              <div className="descriptionbox-nav-box">
                  Description
              </div>
              <div className="descriptionbox-nav-box fade">
                  Reviews ({getRandomNumber(100,1000)})
              </div>
          </div>
          <div className="descriptionbox-description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sapiente at illo aliquid libero nisi vero, quo delectus impedit est, dolorem, quibusdam vitae! Eos dolorem laboriosam numquam placeat obcaecati quis!</p>
              <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi officiis consequatur commodi libero ullam ipsam unde, sint excepturi quaerat reiciendis. Quam itaque, eum minima animi sequi nemo explicabo dolor libero.
              </p>
          </div>
    </div>
  )
}

export default DescriptionBox