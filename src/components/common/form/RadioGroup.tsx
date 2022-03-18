import styled from '@emotion/styled'
import { memo, forwardRef, Ref } from 'react'

interface IRadioGroup {
  id: string
  label: string
  value: string
  selected?: boolean
}

interface IProps {
  name: string
  list: IRadioGroup[]
  [key: string]: any
}

const RadioGroup = forwardRef(
  ({ styledComponent, name, list, ...props }: IProps, ref: Ref<HTMLInputElement>) => {
    const Wrapper = styledComponent || DefaultStyleComponent
    return (
      <Wrapper>
        {list.map((item, index) => (
          <li key={item.id}>
            <input
              type="radio"
              id={item.id}
              name={name}
              value={item.value}
              className={'screen-out'}
              defaultChecked={item.selected}
              ref={ref}
              {...props}
            />{' '}
            <label htmlFor={item.id}>
              <span>{item.label}</span>{' '}
            </label>
          </li>
        ))}
      </Wrapper>
    )
  },
)

export default memo(RadioGroup)

const DefaultStyleComponent = styled.ul`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  li {
    position: relative;
    flex: 1;
    border: 1px solid #e1e4e8;
    text-align: center;

    & ~ li {
      border-left: none;
    }

    label {
      cursor: pointer;
      display: block;
      line-height: 46px;
    }

    input[type='radio']:checked + label {
      background-color: #39f;
      color: #fff;
      font-weight: 600;
    }
  }
`
