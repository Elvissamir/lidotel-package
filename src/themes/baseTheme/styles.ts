import { StyleFunctionProps } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: (props: StyleFunctionProps) => ({
        body: {
            color: mode("black", "white")(props),
            bg: mode("gray.50", "blue.800")(props)
        }
    })
}

export default styles