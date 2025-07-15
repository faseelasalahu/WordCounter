import React from 'react'
import Header from '../components/Header'
import { Counter } from '../components/Counter'
function HomePage() {
  return (
   <main>
    <Header heading= "Word Counter" subHeading= "Free online character and word count tool."/>

    <Counter />
   </main>
  )
}

export default HomePage
