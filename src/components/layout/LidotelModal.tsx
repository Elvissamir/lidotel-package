import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react"
import LidotelModalContentWrapper from "./LidotelModalContentWrapper"

interface LidotelModalProps {
    show: boolean 
    heading: string 
    hideControls?: boolean
    isSavingChanges?: boolean
    children: JSX.Element | JSX.Element[]
    onSave?: () => void
    onClose: () => void
}

const LidotelModal = ({ heading, show, isSavingChanges, hideControls, children, onSave, onClose }: LidotelModalProps) => {
    return (
        <Modal 
            isOpen={show} 
            onClose={onClose}
            motionPreset='slideInRight'>
                <ModalOverlay />
                <ModalContent 
                    borderRadius='0'
                    top='0rem' 
                    mt='0'
                    h='100vh'
                    marginLeft='auto'
                    maxW='629px' 
                    w='629px' >
                        <ModalCloseButton />
                        <ModalBody 
                            bg='#eff4f6'
                            padding='111px 67px 463px 42px'
                            left='0'
                            w='629px' 
                            maxW='629px'>
                                <LidotelModalContentWrapper 
                                    heading={heading}
                                    hideControls={hideControls}
                                    isSavingChanges={isSavingChanges}
                                    onSave={onSave? onSave : () => null} 
                                    onCancel={onClose}>
                                        {children}
                                </LidotelModalContentWrapper>
                        </ModalBody>
                </ModalContent>
        </Modal>
    )    
}

export default LidotelModal