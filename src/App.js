import PropTypes from 'prop-types'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: '42 Correction',
            day: 'Feb 6th at 12:15am',
            reminder: true
        },
        {
            id: 3,
            text: 'Destiny 2 Weekly Reset',
            day: 'Feb 6th at 7:00pm',
            reminder: false
        }
    ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // Toggle AddTask
  const toggleAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">
      <Header onAdd={toggleAddTask}/>
      {showAddTask ? <AddTask onAdd={addTask} onUpdate={toggleAddTask}/> : ''}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default App;
