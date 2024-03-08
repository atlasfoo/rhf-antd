import { Button, ButtonProps } from 'antd'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

const ResetButton: FC<ButtonProps> = (props) => {
  const { children, onClick, ...restProps } = props

  const {
    reset,
    formState: { isDirty },
  } = useFormContext()

  return (
    <Button
      onClick={(evt) => {
        reset()
        onClick?.(evt)
      }}
      disabled={!isDirty}
      type="dashed"
      {...restProps}
    >
      {children}
    </Button>
  )
}

export default ResetButton
