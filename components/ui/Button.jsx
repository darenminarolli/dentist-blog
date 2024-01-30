import React from 'react'

const Button = ({text, type, style ,onClick}) => {
  return (
    <button type={ 'button'} onClick={onClick}  className={`${style} w-full shadow-md  text-center rounded-md bg-slate-900 text-slate-100`}>
      {text}
    </button>
  )
}

export default Button
