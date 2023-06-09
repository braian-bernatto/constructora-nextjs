const ContactUs = () => {
  return (
    <section id='contact-us' className='contact-us'>
      <div className='container'>
        <span className='subheading'>Contáctanos</span>
        <h2 className='heading-secondary'>Envíanos un mensaje</h2>
        <div className='contact-grid'>
          <form
            className='contact-form'
            name='constructora-form'
            method='POST'
            data-netlify='true'
          >
            <input type='hidden' name='form-name' value='constructora-form' />

            <div className='form-group'>
              <input
                id='name'
                name='nombre'
                type='text'
                placeholder='Nombre y Apellido'
                required
                autoComplete='true'
              />
              <label htmlFor='name'>Nombre y Apellido</label>
            </div>
            <div className='form-group'>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='Tu correo'
                required
                autoComplete='true'
              />
              <label htmlFor='email'>Email</label>
            </div>
            <textarea
              id='mensaje'
              name='mensaje'
              cols='30'
              rows='10'
              placeholder='Tu mensaje...'
              required
            ></textarea>
            <button className='primary-btn btn' type='submit'>
              Enviar
            </button>
          </form>
          <div className='contact-box'>
            <a href='https://wa.me/+595962334028' className='contact-group'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon'
                viewBox='0 0 512 512'
              >
                <path
                  d='M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z'
                  fillRule='evenodd'
                />
              </svg>
              +595 962 334 028
            </a>
            <a href='mailto:ceo.consultas@gmail.com' className='contact-group'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon'
                viewBox='0 0 512 512'
              >
                <path
                  d='M320 96H88a40 40 0 00-40 40v240a40 40 0 0040 40h334.73a40 40 0 0040-40V239'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='32'
                />
                <path
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='32'
                  d='M112 160l144 112 87-65.67'
                />
                <circle cx='431.95' cy='128.05' r='47.95' />
                <path d='M432 192a63.95 63.95 0 1163.95-63.95A64 64 0 01432 192zm0-95.9a32 32 0 1031.95 32 32 32 0 00-31.95-32z' />
              </svg>
              ceo.consultas@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
