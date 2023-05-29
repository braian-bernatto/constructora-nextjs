'use client'
import Image from 'next/image'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const Header = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1
  })
  return (
    <header ref={ref} className={`header ${inView ? 'sticky' : ''}`}>
      <h2>{`Header inside viewport ${inView}.`}</h2>
      <Image
        className='logo'
        width={100}
        height={100}
        src={'next.svg'}
        alt='logo'
      />
    </header>
  )
}

export default Header
