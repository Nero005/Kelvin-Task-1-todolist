import { useState, useEffect } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { JSX } from 'react/jsx-runtime'
import { format } from 'date-fns'

interface Todo {
  id: number
  text: string
  done: boolean
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('todos')
    if (saved) setTodos(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string) => {
    const time = format(new Date(), 'HH:mm')
    setTodos([...todos, { id: Date.now(), text: `${text} (${time})`, done: false}])
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const clearAll = () => setTodos([])

  return (
    <div className="app">
      <h1>To do List</h1>

      <TodoInput onAdd={addTodo} />

      <button onClick={clearAll}>Clear All</button>

      {todos.length === 0 && <p>No tasks yet</p>}

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  )
}

export default App