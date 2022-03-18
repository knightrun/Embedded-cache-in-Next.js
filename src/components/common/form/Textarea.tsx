import { memo, forwardRef, Ref } from 'react'
import styled from '@emotion/styled'

interface IProps {
  styledComponent?: any
  id: string
  labelVisible?: boolean
  label: string
  error: undefined | any
  errMsg?: string
  [key: string]: any
}

const TextArea = forwardRef(
  (
    { styledComponent, id, labelVisible = true, label, error, errMsg, ...props }: IProps,
    ref: Ref<HTMLTextAreaElement>,
  ) => {
    const Wrapper = styledComponent || DefaultStyleComponent
    return (
      <Wrapper className={`form-control ${error ? 'is-invalid' : ''}`}>
        {labelVisible && <label htmlFor={id}>{label}</label>}
        <textarea id={id} {...props} ref={ref} />
        <span className={'invalid-message'}>{error?.message}</span>
      </Wrapper>
    )
  },
)

export default memo(TextArea)

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

  textarea {
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
