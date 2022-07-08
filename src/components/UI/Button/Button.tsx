import {FC, ReactNode} from 'react'

interface ButtonProps {
  children?: ReactNode
  onClick?: () => void
  classNames?: string
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      className={"btn " + props.classNames}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button