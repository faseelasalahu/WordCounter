import React from 'react'

function Header({heading, subHeading}) {
  return (
    <section className='header'>
   <h1 data-testid= "heading">{heading}</h1>
   <p data-testid="subheading">{subHeading}</p>
    </section>
   
  )
}

export default Header
