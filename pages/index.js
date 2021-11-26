import React from "react"
import { Flex } from "@chakra-ui/react"
import AddTaskForm from "../components/Form/AddTaskForm"

export default function Home() {
  return (
    <Flex direction="column" m="100px">
      <AddTaskForm />
    </Flex>
  )
}
