import { InputNumber as AntdInputNumber } from 'antd'
import { FC } from 'react'
import { useController } from 'react-hook-form'

import { InputNumberProps } from '../../../types/RhfInputTypes'

const InputNumber: FC<InputNumberProps> = (props) => {
  const { name, ...restprops } = props

  const { field } = useController({ name })

  return <AntdInputNumber {...field} {...restprops} />
}

export default InputNumber
