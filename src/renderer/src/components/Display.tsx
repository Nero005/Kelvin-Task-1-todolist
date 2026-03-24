interface Props {
  expression: string
  result: string
}

export default function Display({ expression, result }: Props) {
  return (
    <div className="display">
      <div className="expression">{expression || '0'}</div>
      {result && <div className="result">= {result}</div>}
    </div>
  )
}