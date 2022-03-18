import { FormEventHandler, ReactNode } from 'react'

interface IProps {
  onSubmit?: FormEventHandler<HTMLFormElement>
  children: ReactNode
}

const Form = ({ onSubmit, children }: IProps) => {
  return <form onSubmit={onSubmit}>{children}</form>
}

export default Form
