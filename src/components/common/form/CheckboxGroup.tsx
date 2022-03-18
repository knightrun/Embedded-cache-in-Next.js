import Checkbox from '@/components/common/form/Checkbox'
import { forwardRef, Ref } from 'react'

interface ICheckBox {
  label: string
  value: string
  group: string
}

interface IProps {
  list: ICheckBox[]
}

const CheckboxGroup = forwardRef(({ list }: IProps, ref: Ref<HTMLInputElement>) => {
  return (
    <div className={'chk_group'}>
      {list.map(({ label, value, group }, index) => (
        <Checkbox
          key={`${group}-${index}`}
          id={`${group}-${index}`}
          name={group}
          label={label}
          value={value}
          ref={ref}
        />
      ))}
    </div>
  )
})

export default CheckboxGroup
