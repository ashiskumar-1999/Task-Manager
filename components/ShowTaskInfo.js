import React from "react"
import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react"
import AddSubTask from "./Form/AddSubTask"

const ShowTaskInfo = ({
  showTaskInfoIsOpen,
  showTaskInfoOnOpen,
  showTaskInfoOnClose,
}) => {
  const {
    isOpen: addSubTaskIsOpen,
    onOpen: addSubTaskOnOpen,
    onClose: addSubTaskOnClose,
  } = useDisclosure()
  return (
    <>
      <Modal isOpen={showTaskInfoIsOpen} onClose={showTaskInfoOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Button colorScheme="blue" mr={3} onClick={addSubTaskOnOpen}>
              Add Subtask
            </Button>
          </ModalHeader>
          <ModalBody>
            <Text fontSize="xl" fontWeight="bold">
              Title
            </Text>
            <Text fontSize="lg" fontWeight="normal">
              Description
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={showTaskInfoOnClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <AddSubTask
        addSubTaskIsOpen={addSubTaskIsOpen}
        addSubTaskOnClose={addSubTaskOnClose}
      />
    </>
  )
}

export default ShowTaskInfo
