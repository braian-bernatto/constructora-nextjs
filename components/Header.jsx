'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
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

    // Smooth scrolling animation
    const allLinks = document.querySelectorAll('a:link')
    allLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault()
        const href = link.getAttribute('href')

        // scroll back to the top
        if (href === '#')
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })

        // scroll to other links
        if (href !== '#' && href.startsWith('#')) {
          const sectionEl = document.querySelector(href)
          sectionEl.scrollIntoView({
            behavior: 'smooth'
          })
        }
      })
    })
  }, [])

  return (
    <header className={`header ${navOpen ? 'nav-open' : ''}`}>
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
            <Link href={'#simuladores'} onClick={() => setNavOpen(false)}>
              Simuladores
            </Link>
          </li>
          <li>
            <Link href={'#services'} onClick={() => setNavOpen(false)}>
              Servicios{' '}
            </Link>
          </li>
          <li>
            <Link
              className='btn primary-btn'
              href={'#contact-us'}
              onClick={() => setNavOpen(false)}
            >
              Contáctanos
            </Link>
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
