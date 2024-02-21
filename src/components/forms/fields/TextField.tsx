import { FC } from 'react'
import { Input, InputProps } from 'antd'
import { useController, Field } from 'react-hook-form'

interface TextFieldProps {
  name: string
  label: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
}

const TextField: FC<TextFieldProps & InputProps> = (props) => {
  const { name } = props
  const {
    field,
    fieldState: { error },
  } = useController({ name })

  return <Input {...props} {...field} status={error ? 'error' : undefined} />
}

export default TextField
