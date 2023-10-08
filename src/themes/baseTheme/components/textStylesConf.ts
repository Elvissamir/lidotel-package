import { defineStyleConfig } from "@chakra-ui/react"
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const textStylesConf = defineStyleConfig({
  baseStyle: (props: StyleFunctionProps) => ({
    color: mode('black', 'white')(props),
  }),
  sizes: {
    lg: {
      fontSize: "18px",
      fontFamily: 'Open sans',
      lineHeight: '26px',
    },
    md: {
      fontSize: "16px",
      fontFamily: 'Open sans',
      lineHeight: '22px',
    },
    sm: {
      fontSize: "14px",
      fontFamily: 'Open sans',
      lineHeight: '20px',
    },
    xs: {
      fontSize: "12px",
      fontFamily: 'Open sans',
      lineHeight: '16px',
    }
  },
  variants: {
    "blue.900-white": (props: StyleFunctionProps) => ({
      color: mode("blue.900", "white")(props)
    })
  }
})

export default textStylesConf