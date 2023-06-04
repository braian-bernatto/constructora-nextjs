import React from 'react'

const Simuladores = () => {
  return (
    <section id='simuladores' className='simuladores'>
      <div className='container'>
        <span className='subheading'>simuladores</span>
        <h2 className='heading-secondary'>
          Querés saber cuánto va a ser tu cuota mensual?
        </h2>
        <ul className='bancos'>
          <li>
            <a
              href='https://www.bnf.gov.py/simulador-de-credito'
              target='_blank'
            >
              <img
                src='./img/bnf-logo.png'
                alt='Logo del Banco Nacional de Fomento'
              />
            </a>
          </li>
          <li>
            <a href='https://www.micasa.itau.com.py/simular' target='_blank'>
              <img
                className='no-filter'
                src='./img/itau-logo.svg'
                alt='Logo del Banco Itau'
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.visionbanco.com/formularios/prestamos'
              target='_blank'
            >
              <img src='./img/vision-logo.svg' alt='Logo del Banco Vision' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Simuladores
