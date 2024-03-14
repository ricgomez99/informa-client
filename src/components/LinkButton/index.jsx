import { Link } from 'react-router-dom'

export function LinkButton({ route, text }) {
  return (
    <Link to={route}>
      <button>
        <span>{text}</span>
      </button>
    </Link>
  )
}
