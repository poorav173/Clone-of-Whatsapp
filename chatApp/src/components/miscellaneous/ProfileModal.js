import { ViewIcon } from '@chakra-ui/icons';
import { Button, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const ProfileModal = ({user, children}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    // console.log(user);
  return (
    <>
    {
        children?<span onClick={onOpen}>{children}</span>:
        <IconButton display={{base: "flex"}} icon={<ViewIcon/>} onClick={onOpen}/>
    }
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image borderRadius={"full"} boxSize={"150px"} src={user.pic} alt={user.name}/>
            {user.email}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileModal