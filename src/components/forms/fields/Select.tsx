import { Select as AntdSelect } from 'antd'
import { FC } from 'react'
import { useController } from 'react-hook-form'

import { SelectProps } from '../../../types/RhfInputTypes'

const _Select: FC<SelectProps> = (props) => {
  const { name, children, ...restProps } = props

  const { field } = useController({ name })

  return (
    <AntdSelect {...field} {...restProps}>
      {children}
    </AntdSelect>
  )
}

const Select = Object.assign(_Select, {
  Option: AntdSelect.Option,
  OptGroup: AntdSelect.OptGroup,
})

export default Select
