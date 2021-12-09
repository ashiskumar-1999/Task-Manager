import React, { useState, useEffect } from "react"
import {
  Box,
  Button,
  Text,
  CheckboxGroup,
  Checkbox,
  VStack,
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
  let subtasks = null
  if (typeof window !== "undefined") {
    subtasks = JSON.parse(localStorage.getItem("subTasks"))
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [subTaskTitle, setSubTaskTitle] = useState(subtasks)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setSubTaskTitle(subTaskTitle)
    }, [subTaskTitle])
  }

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
            <Text fontSize="xl" fontWeight="bold"></Text>
            <Text fontSize="lg" fontWeight="normal">
              Description
            </Text>
            {subtasks && (
              <VStack align="flex-start">
                {subtasks.map((subtask, i) => (
                  <Checkbox value="naruto" key={i}>
                    {subtask}
                  </Checkbox>
                ))}
              </VStack>
            )}
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
