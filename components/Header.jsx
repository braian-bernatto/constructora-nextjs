'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const [navOpen, setNavOpen] = useState(false)

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
        rootMargin: '-80px'
      }
    )
    obs.observe(sectionHeroEl)
  }, [])

  return (
    <header className={`header ${navOpen ? 'nav-open' : ''}`}>
      <Link href={'/'} className='logo'>
        <Image
          className='logo'
          width={200}
          height={100}
          src={'logo-2.svg'}
          alt='logo'
        />
      </Link>

      <nav className='nav-container'>
        <ul className='nav-list'>
          {pathname !== '/' && (
            <>
              <li>
                <a href={'#simuladores'} onClick={() => setNavOpen(false)}>
                  Simuladores
                </a>
              </li>
              <li>
                <a href={'#services'} onClick={() => setNavOpen(false)}>
                  Servicios{' '}
                </a>
              </li>
            </>
          )}
          {pathname !== '/tu-casa' && (
            <li>
              <Link href={'/tu-casa'}>Tu casa</Link>
            </li>
          )}
          <li>
            <a
              className='btn primary-btn'
              href={'#contact-us'}
              onClick={() => setNavOpen(false)}
            >
              Contáctanos
            </a>
          </li>
        </ul>
      </nav>

      <button className='btn-mobile-nav' onClick={() => setNavOpen(!navOpen)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          name='open-button'
          className='icon-mobile-nav'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          name='close-button'
          className='icon-mobile-nav'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
    </header>
  )
}

export default Header
