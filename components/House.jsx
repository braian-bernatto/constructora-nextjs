'use client'

import { metrosCuadradosAtom } from '@/lib/atoms'
import { useAtom } from 'jotai'
import React from 'react'

const House = () => {
  const [metrosCuadrados, setMetrosCuadrados] = useAtom(metrosCuadradosAtom)

  return (
    <div className='house-container'>
      <div
        className={`house ${
          metrosCuadrados > 99
            ? 'house-m house-b'
            : metrosCuadrados > 69
            ? 'house-m'
            : ''
        }`}
      >
        <div className='roof'></div>
        <div className='window window_left'></div>
        <div className='window window_right'></div>
        <div className='front'></div>
        <div className='side side_left'>
          <div className='window'></div>
        </div>
        <div className='side side_right'>
          <div className='window'></div>
        </div>
        <div className='calculator-meters'>
          <input
            className='calculator-input'
            type='number'
            inputMode='numeric'
            onChange={e => setMetrosCuadrados(e.target.value)}
            onClick={e => e.target.select()}
            value={metrosCuadrados}
          />
        </div>
      </div>
    </div>
  )
}

export default House
