import { Formik } from 'formik'
import {
  Checkbox,
  Form,
  FormItem,
  Input,
  ResetButton,
  Select,
  SubmitButton,
  InputNumber,
} from 'formik-antd'
import { FormSchema, FormSchemaType } from '../../types/FormSchema'
import { Card } from 'antd'
import { Fruits } from '../../types/SelectValues'
import { useContext } from 'react'
import { FormContextType, FormsContext } from '../../views/forms'
import { toFormikValidationSchema } from 'zod-formik-adapter'

const FormikAntdForm = () => {
  const { setValues } = useContext(FormsContext) as FormContextType

  const onSubmit = (values: FormSchemaType) => {
    console.log(values)
    setValues(values)
    return Promise.resolve();
  }
  return (
    <Formik<FormSchemaType>
      initialValues={{
        name: '',
        email: '',
        password: '',
        check: false,
        select: 1,
        longText: '',
        number: 0,
      }}
      validationSchema={toFormikValidationSchema(FormSchema)}
      onSubmit={onSubmit}
    >
      <Card title="Formik Form">
        <Form>
          <Card type="inner">
            <FormItem name="name" label="nombre">
              <Input name="name" />
            </FormItem>
            <FormItem name="email" label="email">
              <Input name="email" />
            </FormItem>
            <FormItem name="password" label="password">
              <Input.Password name="password" />
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
        </Form>
      </Card>
    </Formik>
  )
}

export default FormikAntdForm
