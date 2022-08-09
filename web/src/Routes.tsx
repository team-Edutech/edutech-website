// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import UsersLayout from 'src/layouts/UsersLayout'

import ContactsLayout from 'src/layouts/ContactsLayout'

import CoursesLayout from 'src/layouts/CoursesLayout'
import ShellLayout from 'src/layouts/ShellLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Route path="/admin" page={AdminPage} name="admin" />
        <Set wrap={CoursesLayout}>
          <Route path="/admin/courses/new" page={CourseNewCoursePage} name="newCourse" />
          <Route path="/admin/courses/{id:Int}/edit" page={CourseEditCoursePage} name="editCourse" />
          <Route path="/admin/courses/{id:Int}" page={CourseCoursePage} name="adminCourse" />
          <Route path="/admin/courses" page={CourseCoursesPage} name="adminCourses" />
        </Set>
        <Set wrap={ContactsLayout}>
          <Route path="/admin/contacts/{id:Int}" page={ContactContactPage} name="adminContact" />
          <Route path="/admin/contacts" page={ContactContactsPage} name="adminContacts" />
        </Set>
        <Set wrap={UsersLayout}>
          <Route path="/admin/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/admin/users/{id:Int}" page={UserUserPage} name="adminUser" />
          <Route path="/admin/users" page={UserUsersPage} name="adminUsers" />
        </Set>
      </Private>
      <Set wrap={ShellLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/courses" page={CoursesPage} name="courses" />
        <Route path="/course/{id:Int}" page={CoursePage} name="course" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
