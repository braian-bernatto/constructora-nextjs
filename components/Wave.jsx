import Image from 'next/image'
import React from 'react'

const Wave = ({ children }) => {
  return (
    <>
      <div className='wave'>
        <Image
          src='./img/wave-gray.svg'
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
          alt='section separator'
        />
      </div>
      {children}
      <div className='wave'>
        <Image
          src='./img/wave-gray-bottom.svg'
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
          alt='section separator'
        />
      </div>
    </>
  )
}

export default Wave
