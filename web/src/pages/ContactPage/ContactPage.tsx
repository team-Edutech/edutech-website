import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { FieldError, Form, Label, TextField, TextAreaField, Submit, SubmitHandler } from '@redwoodjs/forms'

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <h1>ContactPage</h1>
      <p>
        Contact us through this form
      </p>

      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <Label name="name" errorStyle={{ "color": "red" }} >Name</Label>
        <TextField name="name" validation={{ required: true }} errorStyle={{ "border": "1px solid red" }} />
        <FieldError name="name" style={{ "color": "red" }} />

        <Label name="email" errorStyle={{ "color": "red" }} >Email</Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          errorStyle={{ "border": "1px solid red" }}
        />
        <FieldError name="email" style={{ "color": "red" }} />

        <Label name="message" errorStyle={{ "color": "red" }} >Message</Label>
        <TextAreaField name="message" validation={{ required: true }} errorStyle={{ "border": "1px solid red" }} />
        <FieldError name="message" style={{ "color": "red" }} />

        <Submit>Send message</Submit>
      </Form>
    </>
  )
}

export default ContactPage
