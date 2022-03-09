import React, { useEffect, useState } from "react"
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

  const handleAddSubTask = () => {
    if (localStorage.getItem(titles[key])) {
      localStorage.setItem("subTasks", JSON.stringify([]))
    }
    var subTaskValue = JSON.parse(localStorage.getItem("subTasks"))
    subTaskValue.push(subtask)
    localStorage.setItem("subTasks", JSON.stringify(subTaskValue))
  }

  return (
    <>
      <Modal isOpen={addSubTaskIsOpen} onClose={addSubTaskOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add the sub task</ModalHeader>

          <ModalBody>
            <form>
              <FormControl isRequired>
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
            <Button
              variant="ghost"
              onClick={() => {
                handleAddSubTask()
                addSubTaskOnClose()
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
