import { Checkbox as AntdCheckbox } from 'antd'
import { FC } from 'react'
import { useController } from 'react-hook-form'

import { CheckboxGroupProps, CheckboxProps } from '../../../types/RhfInputTypes'

const _Checkbox: FC<CheckboxProps> = (props) => {
  const { name, ...restProps } = props

  const { field } = useController({ name })
  return <AntdCheckbox checked={field.value} {...field} {...restProps} />
}

export const CheckboxGroup: FC<CheckboxGroupProps> = (props) => {
  const { name, ...restProps } = props

  const { field } = useController({ name })
  return <AntdCheckbox.Group {...field} {...restProps} />
}

const Checkbox = Object.assign(_Checkbox, {
  Group: CheckboxGroup,
})

export default Checkbox
