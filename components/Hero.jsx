import React from 'react'
import Calculadora from './Calculadora'
import PrimaryButton from './PrimaryButton'

const Hero = () => {
  return (
    <section className='hero container'>
      <h1 className='heading-primary dots'>
        Calcula <span className='highlight'>cuánto</span> te va a costar
        construir la casa de tus sueños!
      </h1>
      <Calculadora />
      <a href={'#contact-us'}>
        <PrimaryButton outline={true} label='Contáctanos' />
      </a>
    </section>
  )
}

export default Hero
