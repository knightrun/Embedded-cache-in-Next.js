import { memo, forwardRef, Ref } from 'react'
import styled from '@emotion/styled'

interface IProps {
  id: string
  name: string
  label: string
  labelVisible?: boolean
  error: undefined | any
  [key: string]: any
}

const Input = forwardRef(
  (
    { styledComponent, id, name, label, labelVisible = true, error, ...props }: IProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const Wrapper = styledComponent || DefaultStyleComponent
    return (
      <Wrapper className={`form-control ${error ? 'is-invalid' : ''}`}>
        {labelVisible && <label htmlFor={id}>{label}</label>}
        <input id={id} name={name} ref={ref} {...props} aria-invalid={error ? 'true' : 'false'} />
        <span role="alert" className={'invalid-message'}>
          {error?.message}
        </span>
      </Wrapper>
    )
  },
)

export default memo(Input)

const DefaultStyleComponent = styled.div`
  position: relative;

  &:not(:first-of-type) {
    margin-top: 10px;
  }

  &.is-invalid {
    input {
      border-color: #ff0000;
    }

    .invalid-message {
      display: block;
    }
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    display: block;
    width: 100%;
    line-height: 1.5;
    background-color: #fff;
    color: #212529;
    border: 1px solid #ced4da;
    font-size: 1rem;
    padding: 10px;
    border-radius: 3px;
    outline: none;
  }

  .invalid-message {
    display: none;
    font-size: 12px;
    color: #ff0000;
  }
`
