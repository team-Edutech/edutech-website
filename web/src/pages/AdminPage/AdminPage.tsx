import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminPage = () => {
  return (
    <>
      <MetaTags title="Admin" description="Admin page" />

      <h1>Admin dashboard</h1>

      <ul>
        <li>
          <Link to={routes.adminCourses()}>Courses</Link>
        </li>
        <li>
          <Link to={routes.adminContacts()}>Contacts</Link>
        </li>
        <li>
          <Link to={routes.adminUsers()}>Users</Link>
        </li>
      </ul>
    </>
  )
}

export default AdminPage
