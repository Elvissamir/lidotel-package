import { FormErrors } from "../core/Forms.types"

export interface LoginFormData {
    email: string 
    password: string
    errors: FormErrors
}