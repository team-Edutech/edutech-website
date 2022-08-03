import { Link, routes } from '@redwoodjs/router'
import type { CoursesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'


export const QUERY = gql`
  query CoursesQuery {
    courses {
      id
      title
      video
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ courses }: CellSuccessProps<CoursesQuery>) => {
  return (
    <>
      {courses.map((course) => (
        <article key={course.id}>
          <header>
            <h2>
              <Link to={routes.course({ id: course.id })}>{course.title}</Link>
            </h2>
          </header>
          <iframe src={course.video}></iframe>
          <div>Posted at: {course.createdAt}</div>
        </article>
      ))}
    </>
  )
}
