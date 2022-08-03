import { render } from '@redwoodjs/testing/web'

import ShellLayout from './ShellLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ShellLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShellLayout />)
    }).not.toThrow()
  })
})
