import { ReactNode } from 'react'

interface IPros {
  title: string
  children: ReactNode
}

const InputGroup = ({ title, children }: IPros) => {
  return (
    <fieldset>
      <legend className={'screen-out'}>{title}</legend>
      {children}
    </fieldset>
  )
}

export default InputGroup
