import React from "react"
import {
  Button,
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
  const handleCreatesubTask = (e) => {
    return <AddSubTask />
  }
  return (
    <Modal isOpen={showTaskInfoIsOpen} onClose={showTaskInfoOnClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={showTaskInfoOnClose}>
            Close
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              handleCreatesubTask()
            }}
          >
            Create Sub Task
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ShowTaskInfo
