import { render, screen } from '@testing-library/react'
import SocialButton from '../SocialButtons'
import { SiLinkedin } from 'react-icons/si'

vi.mock('@hooks/useReducedMotion', () => ({
  default: () => true,
}))

describe('SocialButton', () => {
  it('renders a link with correct href', () => {
    render(
      <SocialButton href="https://linkedin.com">
        <SiLinkedin />
        <span>LinkedIn</span>
      </SocialButton>
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://linkedin.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders children', () => {
    render(
      <SocialButton href="#">
        <SiLinkedin />
        <span>LinkedIn</span>
      </SocialButton>
    )
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
  })
})
