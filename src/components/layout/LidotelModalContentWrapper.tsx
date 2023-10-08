import { Button, Flex, Heading } from "@chakra-ui/react"

interface LidotelModalContentWrapperProps {
    heading: string 
    hideControls?: boolean
    children: JSX.Element | JSX.Element[]
    isSavingChanges?: boolean
    onSave: () => void
    onCancel: () => void
}

const LidotelModalContentWrapper = ({ heading, hideControls, isSavingChanges, children, onSave, onCancel }: LidotelModalContentWrapperProps) => {
    return (
        <Flex 
            flexDir='column'
            bg='white'
            padding='24px 16px'>
                <Flex alignItems='center' justifyContent='space-between' w='full'>
                    <Heading 
                        fontFamily='Poppins'
                        fontWeight='700'
                        size='2xl'>
                            {heading}
                    </Heading>
                    {!hideControls &&  <Flex>
                        <Button 
                            aria-label="Cancel"
                            onClick={onCancel}
                            size='xs'
                            borderRadius='4px'
                            variant='secondaryBlue600'
                            minW='72px'>
                                Cancel
                        </Button>
                        <Button 
                            aria-label="Save changes"
                            onClick={onSave}
                            isLoading={isSavingChanges}
                            size='xs'
                            borderRadius='4px'
                            variant='primaryBlue600'
                            ml='10px'
                            minW='68px'>
                                Save
                        </Button>
                    </Flex>}
                </Flex>
                <Flex flexDir='column' mt='25px' w='full'>
                    {children}
                </Flex>
        </Flex>
    )
}

export default LidotelModalContentWrapper