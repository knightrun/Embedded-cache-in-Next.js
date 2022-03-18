import { memo, forwardRef, Ref } from 'react'
import styled from '@emotion/styled'

interface IProps {
  id: string
  name: string
  label: string
  value?: string
  error?: undefined | any
  [key: string]: any
}

const Checkbox = forwardRef(
  (
    { styledComponent, id, name, label, value, error, ...props }: IProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const Wrapper: any = styledComponent || DefaultStyleComponent
    return (
      <Wrapper className={`form-control ${error ? 'is-invalid' : ''}`}>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          ref={ref}
          {...props}
          aria-invalid={error ? 'true' : 'false'}
        />
        <label htmlFor={id}>
          <span>{label}</span>
        </label>
        <span role="alert" className={'invalid-message'}>
          {error?.message}
        </span>
      </Wrapper>
    )
  },
)

export default memo(Checkbox)

const DefaultStyleComponent = styled.div`
  margin-top: 10px;
  &.is-invalid {
    input {
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
