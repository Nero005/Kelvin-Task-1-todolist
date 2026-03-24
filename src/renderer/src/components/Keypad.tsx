import Button from './Button'

const BUTTONS = [
  'C', '(', ')', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='
]

interface Props {
  onButton: (v: string) => void
}

export default function Keypad({ onButton }: Props) {
  return (
    <div className="keypad">
      {BUTTONS.map((b) => (
        <Button key={b} label={b} onClick={onButton} wide={b === '0'} />
      ))}
    </div>
  )
}