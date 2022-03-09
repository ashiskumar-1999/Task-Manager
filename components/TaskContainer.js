import React, { useState, useEffect } from "react"
import {
  Box,
  Button,
  Text,
  Flex,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import ShowTaskInfo from "./ShowTaskInfo"

const TaskContainer = ({ label, title }) => {
  const {
    isOpen: showTaskInfoIsOpen,
    onOpen: showTaskInfoOnOpen,
    onClose: showTaskInfoOnClose,
  } = useDisclosure()

  let tasks = null
  if (typeof window !== "undefined") {
    tasks = JSON.parse(localStorage.getItem("titles"))
    console.log(tasks.key)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tasktitle, setTaskTitle] = useState(tasks)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setTaskTitle(tasktitle)
    }, [tasktitle])
  }

  return (
    <>
      <Flex
        direction="column"
        minW="300px"
        minH="500px"
        p="10px"
        border="1px faded"
        borderRadius="20px"
        boxShadow="lg"
      >
        <Box m="5px">
          <Text fontSize="xl" fontWeight="bold">
            {label}
          </Text>
        </Box>

        {tasks && (
          <VStack spacing={2}>
            {tasks?.map((task, i) => (
              <Button
                w="300px"
                onClick={showTaskInfoOnOpen}
                key={i}
                isTruncated
              >
                {task}
              </Button>
            ))}
          </VStack>
        )}
        <ShowTaskInfo
          showTaskInfoIsOpen={showTaskInfoIsOpen}
          showTaskInfoOnClose={showTaskInfoOnClose}
        />
      </Flex>
    </>
  )
}

export default TaskContainer
