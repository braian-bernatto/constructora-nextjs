'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'

const Header = () => {
  useEffect(() => {
    // sticky navigation at intersection
    const sectionHeroEl = document.querySelector('.hero')
    const obs = new IntersectionObserver(
      entries => {
        const ent = entries[0]
        if (!ent.isIntersecting) {
          document.body.classList.add('sticky')
        }
        if (ent.isIntersecting) {
          document.body.classList.remove('sticky')
        }
      },
      {
        // in the viewport
        root: null,
        threshold: 0,
        rootMargin: '-90px'
      }
    )
    obs.observe(sectionHeroEl)
  }, [])

  return (
    <header className={`header`}>
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
