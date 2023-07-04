'use client'

import { houseTypeAtom } from '@/lib/atoms'
import { useAtom } from 'jotai'

const HouseTypeCards = () => {
  const [houseType, setHouseType] = useAtom(houseTypeAtom)
  return (
    <div className='cards'>
      <span className='card'>
        <input
          type='radio'
          name='house-type'
          id='basic'
          onChange={e => setHouseType(e.target.id)}
          checked={houseType === 'basic'}
        />
        <label htmlFor='basic'>Básico</label>
        <ul>
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
                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            Estructura confinada
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
                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            Cerámicas
          </li>
          <li className='unavailable'>
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
                d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            Equipamientos
          </li>
        </ul>
      </span>
      <span className='card'>
        <input
          type='radio'
          name='house-type'
          id='premium'
          onChange={e => setHouseType(e.target.id)}
          checked={houseType === 'premium'}
        />
        <label htmlFor='premium'>Premium</label>
        <ul>
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
                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            Mampostería estructural
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
                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            Porcelanatos
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
                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            Equipamientos
          </li>
        </ul>
      </span>
    </div>
  )
}

export default HouseTypeCards
