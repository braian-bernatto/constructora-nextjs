'use client'

import React from 'react'
import House from './House'
import HouseTypeCards from './HouseTypeCards'
import { useAtom } from 'jotai'
import { precioTotalCasaAtom } from '@/lib/atoms'

const Calculadora = () => {
  const precioTotal = useAtom(precioTotalCasaAtom)

  return (
    <div className='calculator-container'>
      <House />
      <HouseTypeCards />
      <div className='amount'>
        {parseInt(precioTotal) > 0
          ? Number(parseInt(precioTotal)).toLocaleString('de-DE', {
              minimumFractionDigits: 0
            })
          : `Ingrese los m2`}
      </div>
    </div>
  )
}

export default Calculadora
