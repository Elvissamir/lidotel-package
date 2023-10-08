import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react"
import SettingsModalContentWrapper from "./SettingsModalContentWrapper"

interface TopBarSettingsModalProps {
    show: boolean 
    content?: JSX.Element
    onClose: () => void
}

const TopBarSettingsModal = ({ show, content, onClose }: TopBarSettingsModalProps) => {
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
                                <SettingsModalContentWrapper
                                    onSave={() => console.log('save settings...')}
                                    onCancel={onClose}>
                                    { content }
                                </SettingsModalContentWrapper>
                        </ModalBody>
                </ModalContent>
        </Modal>
    )
}

export default TopBarSettingsModal