const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        Copyright &copy;{' '}
        <span className='year'>{new Date().getFullYear()}</span>&nbsp;
        <a href='#'>Bernatto Inc.</a>
      </div>
    </footer>
  )
}

export default Footer
