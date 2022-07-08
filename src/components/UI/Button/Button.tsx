import {FC, ReactNode} from 'react'

export enum ButtonColors {
  green = 'btn--success',
  primary = 'btn--primary',
  red =  'btn--danger'
}

interface ButtonProps {
  children?: ReactNode
  onClick?: () => void
  classNames?: string
  color: ButtonColors
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      className={`btn ${props.color} ${props.classNames}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button