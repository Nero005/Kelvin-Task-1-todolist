import { useState } from 'react'
import { evaluate } from 'mathjs'
import Display from './components/Display'
import Keypad from './components/Keypad'
import './main.css'
import { JSX } from 'react/jsx-runtime'

export default function App(): JSX.Element {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')

  const handleButton = (value: string): void => {
    if (value === 'C') {
      setExpression('')
      setResult('')
    } else if (value === '=') {
      try {
        const res = String(evaluate(expression))
        setResult(res)
        setExpression(res)
      } catch {
        setResult('Error')
        setExpression('')
      }
    } else {
      setExpression((prev) => prev + value)
      setResult('')
    }
  }

  return (
    <div className="calculator">
      <h1 className="title">Calculator</h1>
      <Display expression={expression} result={result} />
      <Keypad onButton={handleButton} />
    </div>
  )
}