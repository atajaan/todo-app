import { useState } from "react"
import "./App.css"

function App() {
  const [tasks,setTasks] = useState([]);
  const [input, setInput] = useState('')

  function handleInput(e) {
    setInput(e.target.value)
  }

  function add(e) {
    e.preventDefault()
    if (input) {
      setTasks([...tasks, input.trim()])
      setInput("")
    }
    
  }

  function handleEnter({key}) {
    if(key == "Enter"){
      add()
    }
  }

  function remove(id) {
    setTasks(tasks.filter((task, index) => index != id))
  }

  function reset() {
    setTasks([])
    setInput("")
  }

  return (
    <div className="app">
      <h1 className="title">Todo List</h1>

      <form className="add-task">
        <input value={input} placeholder="Type your task here" onChange={handleInput} onKeyUp={handleEnter}/>
        <button onClick={add}>Add to list</button>
      </form>
      <div className="tasks">
        {tasks.map((task, index) => (
          // eslint-disable-next-line react/jsx-key
          <div className="task">
            <p>{task}</p>
            <button onClick={() => remove(index)}>x</button>
          </div>
        ))}
      </div>

      <button className="reset-button" onClick={reset}>Reset tasks</button>

    </div>
  )
}
export default App