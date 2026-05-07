import { render, screen } from '@testing-library/react'
import Badge from '../Badge'
import { describe, expect, it } from 'vitest'

describe('Badge', () => {
  it('renders children correctly', () => {
    render(<Badge>Available for work</Badge>)
    expect(screen.getByText('Available for work')).toBeInTheDocument()
  })

  it('renders a link to LinkedIn', () => {
    render(<Badge>Test</Badge>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/niicolasvarelaa/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
