import type { FindCourseQuery, FindCourseQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindCourseQuery($id: Int!) {
    course: course(id: $id) {
      id
      title
      video
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCourseQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  course,
}: CellSuccessProps<FindCourseQuery, FindCourseQueryVariables>) => {
  return (
    <>
      <article key={course.id}>
        <header>
          <h2>{course.title}</h2>
        </header>
        <iframe src={course.video}></iframe>
        <div>Posted at: {course.createdAt}</div>
      </article>
    </>
  )
  return <div>{JSON.stringify(course)}</div>
}
