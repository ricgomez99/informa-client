import { LinkButton } from './../../components/LinkButton/index'

export function Home() {
  return (
    <>
      <section>
        <div>
          <h2>Welcome to Tasks Manager!</h2>
          <p>Create, Delete, and Update your tasks in just minutes.</p>
        </div>
        <aside>
          <h4>Where to start?</h4>
          <LinkButton route={'/login'} text={'Login'} />
        </aside>
      </section>
    </>
  )
}
