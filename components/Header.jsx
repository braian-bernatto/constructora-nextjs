'use client'
import Image from 'next/image'
import Link from 'next/link'
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
      <Link href={'#'} className='logo'>
        <Image
          className='logo'
          width={100}
          height={100}
          src={'next.svg'}
          alt='logo'
        />
      </Link>

      <nav className='nav-container'>
        <ul className='nav-list'>
          <li>
            <Link href={'#simuladores'}>Simuladores</Link>
          </li>
          <li>
            <Link href={'#services'}>Servicios </Link>
          </li>
          <li>
            <Link className='btn primary-btn' href={'#contact-us'}>
              Contáctanos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
