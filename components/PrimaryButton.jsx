const PrimaryButton = ({ label, outline }) => {
  return (
    <span className='center-flex'>
      <button
        className={`btn ${
          outline === true ? 'primary-btn-oultine' : 'primary-btn'
        }`}
      >
        {label}
      </button>
    </span>
  )
}

export default PrimaryButton
