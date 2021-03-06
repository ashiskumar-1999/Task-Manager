import React from "react"
import {
  Box,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react"

const AddTaskForm = () => {
  const { onOpen, isOpen, onClose } = useDisclosure()
  const [title, setTitle] = React.useState(null)
  const [description, setDescription] = React.useState(null)

  const handleCreateTask = () => {
    if (!localStorage.getItem("titles")) {
      localStorage.setItem("titles", JSON.stringify([]))
    }
    var currentTitle = JSON.parse(localStorage.getItem("titles"))
    currentTitle.push(title)
    localStorage.setItem("titles", JSON.stringify(currentTitle))
    console.log("key is", titles[key])

    if (!localStorage.getItem("descriptions")) {
      localStorage.setItem("descriptions", "[]")
    }
    var currentDescription = JSON.parse(localStorage.getItem("descriptions"))
    currentDescription.push(description)
    localStorage.setItem("descriptions", JSON.stringify(currentDescription))
    /* 
    window.localStorage.setItem("title", titles)
    window.localStorage.setItem("description", description) */
  }
  return (
    <Box>
      <Button colorScheme="blue" onClick={onOpen}>
        Create Task
      </Button>

      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>

          <ModalBody>
            <form>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <FormLabel>Description</FormLabel>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
              Create Task
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default AddTaskForm
