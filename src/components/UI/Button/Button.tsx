import {FC, ReactNode} from 'react'

interface ButtonProps {
  children?: ReactNode
}

const Button: FC<ButtonProps> = ({children}) => {
  return (
    <button className="btn">
      {children}
    </button>
  )
}

export default Button