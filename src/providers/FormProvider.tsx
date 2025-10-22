'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, useState } from "react"


export const FormContext = createContext<any>({})

const FormProvider = ({children}: any) => {

    const [formData, setFormData] = useState()
    console.log("From State", formData);

  return (
    <FormContext.Provider value={{formData, setFormData}}>
        {children}
    </FormContext.Provider>
  )
}

export default FormProvider