import { render, screen } from '@testing-library/react'
import ActionButton from '../ActionButton'
import { ExternalLink } from 'lucide-react'

vi.mock('@hooks/useReducedMotion', () => ({
  default: () => true,
}))

describe('ActionButton', () => {
  it('renders a link with correct href', () => {
    render(<ActionButton href="https://example.com" label="Click me" icon={ExternalLink} />)
    const link = screen.getByRole('link', { name: 'Click me' })
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders the icon and label', () => {
    render(<ActionButton href="#" label="Demo" icon={ExternalLink} />)
    expect(screen.getByText('Demo')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<ActionButton href="#" label="Test" icon={ExternalLink} className="custom-class" />)
    expect(screen.getByRole('link', { name: 'Test' })).toHaveClass('custom-class')
  })
})
