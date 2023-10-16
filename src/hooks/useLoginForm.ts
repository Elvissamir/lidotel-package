import { ChangeEvent, useState } from "react"
import { LoginFormData } from "./LoginForm.types"
import useLoginFormValidation from "./useLoginFormValidation"

const initialFormData: LoginFormData = {
    email: "",
    password: "",
    errors: {}
}

const useLoginForm = () => {
    const [formData, setFormData] = useState<LoginFormData>({...initialFormData})
    const { validateData, isValidData } = useLoginFormValidation()
    const [ loading, setLoading ] = useState(false)
    
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'email') {
            const ndata = {...formData}
            const error = validateData({ field: "email", value: e.target.value })

            ndata.email = e.target.value

            if (error) ndata.errors["email"] = error
            else delete ndata.errors["email"]

            setFormData(ndata)
        }
    }

    const onLogin = async () => {

    }

    const checkFormData = () => isValidData(formData)

    return {
        formData,
        checkFormData,
        loading,
        onInputChange,
        onLogin
    }
}

export default useLoginForm