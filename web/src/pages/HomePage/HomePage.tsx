import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Welcome to Edutech platform.
      </p>
      <p>
        Edutech is a nice place to bootstrap your career in coding.
        Access thousands of courses, easily accessible and learn coding in a breeze !
      </p>
    </>
  )
}

export default HomePage
