import { FormError } from "../core/Forms.types"
import { LoginFormData } from "./LoginForm.types"

interface ValidateDataParams {
    field: "email" | "password"
    value: string
}

const useLoginFormValidation = () => {
    const validateEmail = (email: string): FormError | null => {
        let error: FormError | null = null 

        if (email.length === 0)
            error = { message: "El campo email no puede estar vacío." }

        return error
    }

    const validatePassword = (password: string): FormError | null => {
        let error: FormError | null = null 

        if (password.length === 0)
            error = { message: "El campo contraseña no puede estar vacío." }

        return error
    }

    const isValidData = (data: LoginFormData): boolean => {
        const emailErrors = validateEmail(data.email)
        const passwordErrors = validatePassword(data.password)

        if (emailErrors || passwordErrors)
            return false

        return true
    }

    const validateData = ({ field, value }: ValidateDataParams): FormError | null => {
        if (field === 'email') 
            return validateEmail(value)

        return validatePassword(value)
    }

    return {
        validateData,
        isValidData
    }
}

export default useLoginFormValidation