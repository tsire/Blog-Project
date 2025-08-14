import React from 'react';
import './components.css'

const Heading = (props) => {

  return (
    <h1 className='heading' style={{fontSize: props.fontSize}}>
      {props.heading}
    </h1>
  )
}

export default Heading;
