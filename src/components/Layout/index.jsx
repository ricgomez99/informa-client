import { Header } from '../Header'
import { Navbar } from '../Navbar/navbar'

export function Layout({ children }) {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <section>{children}</section>
    </>
  )
}
