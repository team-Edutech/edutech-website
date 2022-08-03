import { MetaTags } from '@redwoodjs/web'
import CourseCell from 'src/components/CourseCell'

interface Props {
  id: number
}

const CoursePage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Course" description="Course page" />

      <CourseCell id={id} />
    </>
  )
}

export default CoursePage
