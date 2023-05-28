import React from 'react'
import Calculadora from './Calculadora'

const Hero = () => {
  return (
    <section className='hero container'>
      <h1 className='heading-primary dots'>
        Calcula <span className='highlight'>cuánto</span> te va a costar
        construir la casa de tus sueños!
      </h1>
      <Calculadora />
    </section>
  )
}

export default Hero
