import { render, screen } from '@testing-library/react'
import TechBadge from '../TechBadge'

vi.mock('@hooks/useReducedMotion', () => ({
  default: () => true,
}))

describe('TechBadge', () => {
  it('renders the tech name', () => {
    render(<TechBadge tech="React" />)
    expect(screen.getByText('React')).toBeInTheDocument()
  })
})
