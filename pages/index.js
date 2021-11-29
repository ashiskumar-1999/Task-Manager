import React from "react"
import { Flex } from "@chakra-ui/react"
import AddTaskForm from "../components/Form/AddTaskForm"
import NewTaskSection from "../components/NewTaskSection"

export default function Home() {
  return (
    <Flex direction="column" m="100px">
      <AddTaskForm />
      <Flex direction="row" my="50px" justifyContent="space-between">
        <NewTaskSection />
      </Flex>
    </Flex>
  )
}
