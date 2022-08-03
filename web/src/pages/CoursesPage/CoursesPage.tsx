import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CoursesPage = () => {
  return (
    <>
      <MetaTags title="Courses" description="Courses page" />

      <h1>Courses</h1>
      <p>
        On this page, you can explore all the courses available !
      </p>
    </>
  )
}

export default CoursesPage
