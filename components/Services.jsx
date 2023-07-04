import React from 'react'
import PrimaryButton from './PrimaryButton'
import Link from 'next/link'

const Services = () => {
  return (
    <section id='services' className='services'>
      <div className='container'>
        <span className='subheading'>Nuestros Servicios</span>
        <h2 className='heading-secondary'>
          Necesitas ayuda para armar tu carpeta para el banco?
        </h2>
        <div className='items-container'>
          <p className='items-description'>
            Podes dejar a nuestro cargo la elaboración de tu carpeta para poner
            a tu disposición todos los documentos necesarios! La carpeta
            incluye:
          </p>

          <ul className='items-list dots-white'>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='check-icon'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              Presupuesto
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='check-icon'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              Especificaciones
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='check-icon'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              Planos, corte y fachada 2D
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='check-icon'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              Cómputo métrico
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='check-icon'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              Cronograma físico financiero
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='check-icon'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.5 12.75l6 6 9-13.5'
                />
              </svg>
              Firma del profesional
            </li>
          </ul>
        </div>
        <a href={'#contact-us'}>
          <PrimaryButton outline='true' label='Contáctanos' />
        </a>
      </div>
    </section>
  )
}

export default Services
