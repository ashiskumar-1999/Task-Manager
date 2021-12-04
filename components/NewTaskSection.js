import React from "react"
import TaskContainer from "./TaskContainer"

const NewTaskSection = ({}) => {
  const [tasktitle, setTaskTitle] = React.useState()
  React.useEffect(() => {
    setTaskTitle(window.localStorage.getItem("titles"))
  }, [tasktitle])
  return (
    <>
      <TaskContainer label="New Task" title={tasktitle} />
    </>
  )
}

export default NewTaskSection
