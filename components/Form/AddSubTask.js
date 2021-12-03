import React, { useState } from "react"
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

function AddSubTask({ addSubTaskIsOpen, addSubTaskOnOpen, addSubTaskOnClose }) {
  const [subtask, setSubtask] = useState()
  return (
    <>
      <Modal isOpen={addSubTaskIsOpen} onClose={addSubTaskOnClose}>
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
            <Button colorScheme="blue" mr={3} onClick={addSubTaskOnClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={addSubTaskOnClose}>
              Create sub task
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddSubTask
