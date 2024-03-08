import { Button, ButtonProps } from 'antd'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

const SubmitButton: FC<ButtonProps> = (props) => {
  const { children, ...restProps } = props
  const {
    formState: { isValid, isDirty, submitCount },
  } = useFormContext()

  return (
    <Button
      type="primary"
      htmlType="submit"
      disabled={!isValid && (isDirty || submitCount > 0)}
      {...restProps}
    >
      {children}
    </Button>
  )
}

export default SubmitButton
