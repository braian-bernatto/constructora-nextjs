import React from 'react'
import Calculadora from './Calculadora'
import PrimaryButton from './PrimaryButton'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='hero container'>
      <h1 className='heading-primary dots'>
        Calcula <span className='highlight'>cuánto</span> te va a costar
        construir la casa de tus sueños!
      </h1>
      <Calculadora />
      <Link href={'#contact-us'}>
        <PrimaryButton outline={true} label='Contáctanos' />
      </Link>
    </section>
  )
}

export default Hero
