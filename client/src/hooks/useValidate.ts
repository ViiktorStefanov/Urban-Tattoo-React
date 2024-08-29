import { useState } from "react";

type Validator = {
  [key: string]: (value: string, values: any) => boolean;
}

type ValidationErrors = {
  [key: string]: boolean;
}

export default function useValidate(
  primaryValues: ValidationErrors,
  values: any,
  validator: Validator
) {
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(primaryValues);

  function onBlur(e: React.FocusEvent<HTMLInputElement>) {
    const validation = validator[e.target.name];

    if (validation) {
      if (!validation(e.target.value, values)) {
        setValidationErrors(state => ({ ...state, [e.target.name]: true }));
      } else {
        setValidationErrors(state => ({ ...state, [e.target.name]: false }));
      }
    }

    if (primaryValues.hasOwnProperty('repeatPassword')) {
      if (e.target.name === "password") {
        if (e.target.value !== values.repeatPassword && values.repeatPassword !== "") {
          setValidationErrors(state => ({ ...state, repeatPassword: true }));
        } else {
          setValidationErrors(state => ({ ...state, repeatPassword: false }));
        }
      }
    }
  }

  return { validationErrors, onBlur };
}
