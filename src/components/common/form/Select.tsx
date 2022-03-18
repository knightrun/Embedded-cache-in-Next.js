import styled from '@emotion/styled'
import { forwardRef, memo, Ref } from 'react'

interface IProps {
  name: string
  options?: string[]
  defaultValue?: string
  error: undefined | any
  [key: string]: any
}

const Select = forwardRef(
  (
    { styledComponent, name, options = [], defaultValue, error, ...props }: IProps,
    ref: Ref<HTMLSelectElement>,
  ) => {
    const Wrapper = styledComponent || DefaultStyleComponent
    return (
      <Wrapper className={`form-control ${error ? 'is-invalid' : ''}`}>
        <select name={name} ref={ref} {...props} aria-invalid={error ? 'true' : 'false'}>
          {defaultValue && <option value={''}>{defaultValue}</option>}
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span role="alert" className={'invalid-message'}>
          {error?.message}
        </span>
      </Wrapper>
    )
  },
)

export default memo(Select)

const DefaultStyleComponent = styled.div`
  &.is-invalid {
    select {
      border-color: #ff0000;
    }

    .invalid-message {
      display: block;
    }
  }

  .invalid-message {
    display: none;
    font-size: 12px;
    color: #ff0000;
  }
`
