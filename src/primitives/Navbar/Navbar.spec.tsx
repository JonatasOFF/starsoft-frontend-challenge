import { render, screen } from '@testing-library/react'

import { Navbar } from './Navbar'
import { NavbarProps } from './types'

function renderComponent(props?: NavbarProps) {
  return render(<Navbar {...props}>Test</Navbar>)
}

describe('<Navbar />', () => {
  it('should render the component', () => {
    renderComponent()

    expect(screen.getByText(/Test/i)).toBeTruthy()
  })

  it('should forward className to the DOM element', () => {
    renderComponent({ className: '123' })

    const navbar = screen.getByText(/Test/i)

    expect(navbar.className).includes('123')
  })
})
