import { Flex, Image, useColorModeValue } from "@chakra-ui/react"
import getAssetsUrl from "../../helpers/getAssetsUrl"
import modeColors from "../../themes/baseTheme/modeColors"
import TopBarBrandDescriptor from "./TopBarBrandDescriptor"

interface TopBarBrandProps {
    imageUrl?: string
    appName?: string
    onClick?: () => void
}

const TopBarBrand = ({ imageUrl, appName, onClick }: TopBarBrandProps) => {
    const { colorbluea } = modeColors
    const bg = useColorModeValue(colorbluea.light, colorbluea.dark)

    return (
        <Flex 
            alignItems='center'
            bg={bg} 
            overflow='hidden' 
            h='full' 
            position='relative' 
            w='250px'>
                <Image 
                    position='absolute'
                    h='35px'
                    w='150px'
                    ml='10px'
                    src='https://lidoteltest.legendsoft.com/wp-content/uploads/2020/10/main_logo_fixed.png'
                    zIndex='3'
                    alt='Lidotel Logo' />
            <Flex position='absolute' bg='white' h='100%' w='200px' style={{ rotate: '-59deg' }} left={appName? '-21%' : '-42%'} />
            {onClick?  
                <Flex onClick={onClick} display='flex' cursor='pointer' w='auto'>
                    <TopBarBrandDescriptor 
                        imageUrl={imageUrl}
                        appName={appName} />
                </Flex> : 
                <TopBarBrandDescriptor 
                    imageUrl={imageUrl}
                    appName={appName} />}
        </Flex>
    )
}

export default TopBarBrand