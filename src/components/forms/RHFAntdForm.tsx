import { zodResolver } from '@hookform/resolvers/zod'
import { Card } from 'antd'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { FormSchema, FormSchemaType } from '../../types/FormSchema'
import { Fruits } from '../../types/SelectValues'
import { FormContextType, FormsContext } from '../../views/forms'
import { Checkbox, FormItem, Input, InputNumber, ResetButton, Select, SubmitButton } from './fields'

const RHFAntdForm = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      check: false,
      select: 1,
      longText: '',
      number: 0,
    },
  })
  const { setValues } = useContext(FormsContext) as FormContextType

  const onSubmit = (values: FormSchemaType) => {
    console.log(values)
    setValues(values)
    return Promise.resolve()
  }
  return (
    <FormProvider {...form}>
      <Card title="RHF Form">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card type="inner">
            <FormItem name="name" label="nombre">
              <Input name="name" />
            </FormItem>
            <FormItem name="password" label="password">
              <Input.Password name="password" />
            </FormItem>
            <FormItem name="email" label="email">
              <Input name="email" />
            </FormItem>
            <FormItem name="check" label="check">
              <Checkbox name="check" />
            </FormItem>
            <FormItem name="select" label="select">
              <Select
                name="select"
                options={Fruits.map((x) => ({ label: x.name, value: x.key }))}
              />
            </FormItem>
            <FormItem name="longText" label="longText">
              <Input.TextArea name="longText" />
            </FormItem>
            <FormItem name="number" label="number">
              <InputNumber name="number" />
            </FormItem>
          </Card>
          <Card type="inner">
            <SubmitButton>Send</SubmitButton>
            <ResetButton>Reset</ResetButton>
          </Card>
        </form>
      </Card>
    </FormProvider>
  )
}

export default RHFAntdForm
