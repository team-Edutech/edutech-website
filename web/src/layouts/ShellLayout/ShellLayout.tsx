import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

type ShellLayoutProps = {
  children?: React.ReactNode
}

const ShellLayout = ({ children }: ShellLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return <>
    <header>
      <h1>
        <Link to={routes.home()}>Edutech</Link>
      </h1>
      {isAuthenticated ? (
        <div>
          <span>Logged in as {currentUser.email}</span>{' '}
          <button type="button" onClick={logOut}>
            Logout
          </button>
        </div>
      ) : (
        <Link to={routes.login()}>Login</Link>
      )}
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
