import { createContext, useState } from 'react'
import FormikAntdForm from '../components/forms/FormikAntdForm'
import FormResultCard from '../components/cards/FormResultCard'
import RHFAntdForm from '../components/forms/RHFAntdForm'

export type FormContextType = {
  values: object
  setValues(v: object): void
}

export const FormsContext = createContext<FormContextType | null>(null)

const FormsPage = () => {
  const [values, _setValues] = useState({})
  const setValues = (values: object) => _setValues(values) 
  return (
    <main>
      <FormsContext.Provider value={{ values, setValues }}>
        <FormikAntdForm />
        <RHFAntdForm />
        <FormResultCard value={values} />
      </FormsContext.Provider>
    </main>
  )
}

export default FormsPage
