import React from 'react'

const Button = ({label, handleClick}) => {
  return (
    <div>
        <input type="button" value={label} onClick = { handleClick } />
    </div>
  )
}

export default Button