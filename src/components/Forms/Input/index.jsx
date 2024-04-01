import styles from './Input.module.css'

export function Input({ type, name, value, placeholder, onChange }) {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  )
}
