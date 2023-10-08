import { Flex } from "@chakra-ui/react"
import { ExternalAppData } from "../../core"

interface AppsMenuItemSimpleIconProps {
    data: ExternalAppData
}

const AppsMenuItemSimpleIcon = ({ data }: AppsMenuItemSimpleIconProps) => {
    return (
        <Flex 
            backgroundImage={data.lightIconUrl}
            borderRadius='4px'
            backgroundPosition='center'
            backgroundRepeat='repeat'
            backgroundSize='100%'
            alignItems='center'
            justifyContent='center'
            transition="all 0.3s ease-in-out"
            h='50px' 
            w='50px'
            _hover={{ backgroundSize: '108%' }} />
    )
}

export default AppsMenuItemSimpleIcon