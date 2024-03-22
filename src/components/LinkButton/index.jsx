import { Link } from 'react-router-dom'

export function LinkButton({ route, text, type }) {
  return (
    <Link to={route}>
      <button type={type ?? 'button'}>
        <span>{text}</span>
      </button>
    </Link>
  )
}
