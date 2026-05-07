import { render, screen } from '@testing-library/react'
import FormInput from '../FormInput'
import { User } from 'lucide-react'

vi.mock('@hooks/useReducedMotion', () => ({
  default: () => true,
}))

const mockRegister = vi.fn(() => ({}))

describe('FormInput', () => {
  it('renders label and input', () => {
    render(<FormInput label="Name" name="name" icon={User} register={mockRegister} />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders with correct input type', () => {
    render(<FormInput label="Email" name="email" type="email" icon={User} register={mockRegister} />)
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email')
  })

  it('shows error message when error is provided', () => {
    render(
      <FormInput
        label="Name"
        name="name"
        icon={User}
        register={mockRegister}
        error={{ message: 'Name is required' }}
      />
    )
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('does not show error message when no error', () => {
    render(<FormInput label="Name" name="name" icon={User} register={mockRegister} />)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('sets aria-invalid to false when no error', () => {
    render(<FormInput label="Name" name="name" icon={User} register={mockRegister} />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'false')
  })
})
