import { Link, routes } from '@redwoodjs/router'

type ShellLayoutProps = {
  children?: React.ReactNode
}

const ShellLayout = ({ children }: ShellLayoutProps) => {
  return <>
    <header>
      <h1>
        <Link to={routes.home()}>Edutech</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
            <Link to={routes.courses()}>Courses</Link>
          </li>
          <li>
            <Link to={routes.dashboard()}>Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <h1>
        <Link to={routes.home()}>Edutech</Link>
      </h1>
      <Link to={routes.contact()}>Contact</Link>
    </footer>
  </>
}

export default ShellLayout
