import { Input as AntdInput } from 'antd';
import { FC } from 'react'
import { useController } from 'react-hook-form'

import { InputProps, PasswordProps, TextAreaProps } from '../../../types/RhfInputTypes';


/**
 * Plain text input with react-hook-form integration with useController, to be used within FormContextProvider. Ideal for text values.
 * @param props Properties
 * @returns component
 * @example <Input name="username" placeholder="Username" />
 */
const _Input: FC<InputProps> = (props) => {
  const { name, ...restProps } = props
  const {
    field,
    fieldState: { error },
  } = useController({ name })

  return (
    <AntdInput {...restProps} {...field} status={error ? 'error' : undefined} suffix={restProps.suffix ?? <span />} />
  )
}

/**
 * Password masked input with react-hook-form integration with useController, to be used within FormContextProvider. Ideal for password(string) values.
 * @param props Properties
 * @returns component
 * @example <Password name="password" placeholder="Password" />
 * @example <Password name="password" placeholder="Password" visibilityToggle={false} />
 */
const PasswordInput: FC<PasswordProps> = (props)=> {
  const { name, ...restProps } = props
  const {
    field,
    fieldState: { error },
  } = useController({ name })

  return (
    <AntdInput.Password
      {...restProps}
      {...field}
      status={error ? 'error' : undefined}
      suffix={restProps.suffix ?? <span />}
    />
  )
}

/**
 * TextArea with react-hook-form integration with useController, to be used within FormContextProvider. Ideal for long text values.
 * @param props Properties
 * @returns controller
 * @example <TextArea name="description" placeholder="Description" />
 * @example <TextArea name="description" placeholder="Description" autoSize={{ minRows: 3, maxRows: 5 }} />
 */
const TextArea: FC<TextAreaProps> = (props) => {
  const { name, ...restProps } = props
  const {
    field,
    fieldState: { error },
  } = useController({ name })

  return (
    <AntdInput.TextArea
      {...restProps}
      {...field}
      status={error ? 'error' : undefined}
    />
  )
}

const Input = Object.assign(_Input, {
  Password: PasswordInput,
  TextArea: TextArea,
})

export default Input
