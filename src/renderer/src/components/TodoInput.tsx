import { useState } from 'react'

interface Props {
  onAdd: (text: string) => void
}

function TodoInput({ onAdd }: Props) {
  const [input, setInput] = useState('')

  const handleAdd = () => {
    if (!input.trim()) return
    onAdd(input)
    setInput('')
  }

  return (
    <div className="input-row">
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleAdd()}
        placeholder="Enter a task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput