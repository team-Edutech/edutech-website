// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import CoursesLayout from 'src/layouts/CoursesLayout'
import ShellLayout from 'src/layouts/ShellLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={CoursesLayout}>
        <Route path="/courses/new" page={CourseNewCoursePage} name="newCourse" />
        <Route path="/courses/{id:Int}/edit" page={CourseEditCoursePage} name="editCourse" />
        <Route path="/courses/{id:Int}" page={CourseCoursePage} name="course" />
        <Route path="/courses" page={CourseCoursesPage} name="courses" />
      </Set>
      <Set wrap={ShellLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/courses" page={CoursesPage} name="courses" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
