import { extendTheme } from "@chakra-ui/react";
import config from "./config";
import styles from "./styles";
import colors from "./colors";
import fonts from "./fonts";
import buttonStylesConf from "./components/buttonStylesConf";
import textStylesConf from "./components/textStylesConf";
import headingStylesConf from "./components/headingStylesConf";

const lightTheme = extendTheme({
    fonts,
    config,
    colors,
    styles,
    components: {
        Button: buttonStylesConf,
        Text: textStylesConf,
        Heading: headingStylesConf
    },
})

export default lightTheme