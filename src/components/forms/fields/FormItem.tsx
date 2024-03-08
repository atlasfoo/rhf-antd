import { Form } from 'antd'
import { FormItemProps as $FormItemProps } from 'antd/lib/form/FormItem'
import { FC, PropsWithChildren, useMemo } from 'react'
import { useController } from 'react-hook-form'

export type FormItemProps = {
  name: string
  showValidateSuccess?: boolean
} & $FormItemProps

const FormItem: FC<FormItemProps & PropsWithChildren> = (props) => {
  const { name, children, showValidateSuccess = false, ...restProps } = props

  const {
    fieldState: { error },
  } = useController({ name })

  const hasError = useMemo(() => !!error, [error])

  return (
    <Form.Item
      validateStatus={
        hasError
          ? 'error'
          : !hasError && showValidateSuccess
          ? 'success'
          : undefined
      }
      hasFeedback={hasError}
      help={error?.message}
      {...restProps}
    >
      {children}
    </Form.Item>
  )
}

export default FormItem
