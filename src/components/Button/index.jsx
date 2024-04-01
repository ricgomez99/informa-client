import './Button.css'

export function Button({ type, handleClick, className, children }) {
  return (
    <button className={className} type={type ?? 'button'} onClick={handleClick}>
      {children}
    </button>
  )
}
