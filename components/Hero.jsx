'use client'
import React from 'react'
import Calculadora from './Calculadora'
import PrimaryButton from './PrimaryButton'
import { usePathname } from 'next/navigation'

const Hero = () => {
  const pathname = usePathname()
  const house = (
    <>
      construir la <span className='highlight'>casa</span> de tus sueños!
    </>
  )
  const carpeta = (
    <>
      armar tu <span className='highlight'>carpeta</span> para el banco!
    </>
  )

  return (
    <section className='hero container'>
      <h1 className='heading-primary dots'>
        Calcula <span className='highlight'>cuánto</span> te va a costar{' '}
        {pathname === '/' ? carpeta : house}
      </h1>
      <Calculadora />
      <span className='center-flex'>
        <a href={'#contact-us'}>
          <PrimaryButton outline={true} label='Contáctanos' />
        </a>
      </span>
    </section>
  )
}

export default Hero
