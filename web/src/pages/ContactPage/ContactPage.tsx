import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { FieldError, Form, FormError, Label, TextField, TextAreaField, Submit, SubmitHandler, useForm } from '@redwoodjs/forms'
import { CreateContactMutation, CreateContactMutationVariables } from 'types/graphql'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [create, { loading, error }] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your message!')
      formMethods.reset()
    },
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <h1>ContactPage</h1>
      <p>
        Contact us through this form
      </p>

      <Toaster />
      <Form onSubmit={onSubmit} error={error} formMethods={formMethods}>
        <FormError error={error} titleStyle={{ "color": "red" }} listStyle={{ "color": "red" }} listItemStyle={{ "color": "red" }} />

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

        <Submit disabled={loading}>Send message</Submit>
      </Form>
    </>
  )
}

export default ContactPage
