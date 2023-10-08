import { Heading, Flex, Text } from "@chakra-ui/react"
import { AppsMenuMoreOption } from "./AppsMenu.types"

interface AppsMenuPopoverFooterProps {
    menuOptions: AppsMenuMoreOption[]
    heading: string
}

const AppsMenuPopoverFooter = ({ menuOptions, heading }: AppsMenuPopoverFooterProps) => {
    return (
        <>
            <Heading fontSize='2xl'>{ heading }</Heading>
            <Flex flexDirection='column' fontSize='xs' marginTop='10px'>
                {menuOptions.map((option, key) =>
                    <Text 
                        fontFamily='Open sans'
                        _notFirst={{ marginTop: '5px' }} 
                        key={key}>
                            {option.name}
                    </Text>
                )}
            </Flex>
        </>
    )
}

export default AppsMenuPopoverFooter