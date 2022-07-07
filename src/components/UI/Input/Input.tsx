import {HTMLProps} from 'react'

const Input = (props: HTMLProps<HTMLInputElement>) => {
  return (
    <input
      className="input"
      {...props}
    />
  )
}

export default Input