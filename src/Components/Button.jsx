import React from 'react'

const Button = () => {
  return (
   <>
   <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        ...style,
      }}
    >
      {label}
    </button>
   </>
  )
}

export default Button
