import React from "react"
import {
  Button,
  FormLabel,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"

function AddSubTask() {
  const [subtask, setSubtask] = React.useState()
  const {
    isOpen: showTaskInfoIsOpen,
    onOpen: showTaskInfoOnOpen,
    onClose: showTaskInfoOnClose,
  } = useDisclosure()
  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>

          <ModalBody>
            <form>
              <FormControl isRequired>
                <FormLabel>Add the sub task</FormLabel>
                <Input
                  value={subtask}
                  onChange={(e) => setSubtask(e.target.value)}
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                handleCreateTask()
                onClose()
              }}
            >
              Create sub task
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddSubTask
