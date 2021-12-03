import React, { useState, useEffct } from "react"
import { Box, Button, Text, Flex, useDisclosure } from "@chakra-ui/react"
import ShowTaskInfo from "./ShowTaskInfo"

const TaskContainer = ({ label, title }) => {
  const {
    isOpen: showTaskInfoIsOpen,
    onOpen: showTaskInfoOnOpen,
    onClose: showTaskInfoOnClose,
  } = useDisclosure()
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
        <Button text-align="left" p="5px" onClick={showTaskInfoOnOpen}>
          {title}
        </Button>

        <ShowTaskInfo
          showTaskInfoIsOpen={showTaskInfoIsOpen}
          showTaskInfoOnClose={showTaskInfoOnClose}
        />
      </Flex>
    </>
  )
}

export default TaskContainer
