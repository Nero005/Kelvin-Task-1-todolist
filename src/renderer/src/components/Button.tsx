interface Props {
  label: string
  onClick: (v: string) => void
  wide?: boolean
}

export default function Button({ label, onClick, wide }: Props) {
  return (
    <button
      className={`btn ${wide ? 'wide' : ''}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  )
}