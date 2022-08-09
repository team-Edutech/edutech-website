import type { FindContacts } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Contacts from 'src/components/Contact/Contacts'

export const QUERY = gql`
  query FindContacts {
    contacts {
      id
      name
      email
      message
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <></>
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ contacts }: CellSuccessProps<FindContacts>) => {
  return <Contacts contacts={contacts} />
}
