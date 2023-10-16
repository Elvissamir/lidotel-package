import { Button, Card, FormControl } from "@chakra-ui/react"
import useLoginForm from "../../hooks/useLoginForm"
import { CustomFormLabel, CustomInput } from "../common"

const LoginForm = () => {
    const { 
        formData,
        loading,
        checkFormData,
        onInputChange,
        onLogin
    } = useLoginForm()

    return (
        <Card 
            display='flex' 
            padding='12px 20px 24px 20px'
            flexDir='column'
            w='320px'>
                <form>
                    <FormControl>
                        <CustomFormLabel 
                            htmlFor="email"
                            text="Email" />
                        <CustomInput 
                            onChange={onInputChange}
                            id="email"
                            error={formData.errors["email"] && formData.errors["email"].message}
                            value={formData.email}
                            type="email"
                            disabled={loading} />
                    </FormControl>
                    <FormControl mt='12px'>
                        <CustomFormLabel 
                            htmlFor="password"
                            text="Contraseña" />
                        <CustomInput 
                            onChange={onInputChange}
                            id="password"
                            error={formData.errors["password"] && formData.errors["password"].message}
                            value={formData.password}
                            type="password"
                            disabled={loading} />
                    </FormControl>
                    <Button 
                        onClick={onLogin}
                        isDisabled={!checkFormData() || loading}
                        bg='gray.700'
                        color='white'
                        mt='24px'
                        h='30px'
                        w='full'
                        _hover={{ bg: "yellow.600" }}>
                            Iniciar Sesión
                    </Button>
                </form>
        </Card>
    )
}

export default LoginForm