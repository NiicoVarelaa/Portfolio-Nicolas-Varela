import { render, screen, fireEvent } from '@testing-library/react'
import ProjectModal from '../ProjectModal'
import LanguageContext from '@context/LanguageContext'

const mockProject = {
  id: 1,
  title: 'Game Zone',
  description: 'Tienda online de videojuegos',
  image: '/project1.webp',
  link: 'https://example.com',
  githubLink: 'https://github.com',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  galleryImages: ['/img1.webp', '/img2.webp', '/img3.webp', '/img4.webp', '/img5.webp', '/img6.webp'],
}

const mockOnClose = vi.fn()

const wrapper = ({ children }) => (
  <LanguageContext.Provider value={{ lang: 'es', toggleLanguage: vi.fn() }}>
    {children}
  </LanguageContext.Provider>
)

vi.mock('@hooks/useTranslation', () => ({
  default: () => ({
    projects: {
      sectionTitle: 'Proyectos',
      projectList: [{ title: 'Game Zone', description: 'Tienda online de videojuegos' }],
      technologiesTitle: 'Tecnologías',
      code: 'Código',
      demo: 'Demo',
    },
  }),
  useLang: () => 'es',
}))

vi.mock('@hooks/useReducedMotion', () => ({
  default: () => true,
}))

describe('ProjectModal', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockOnClose.mockClear()
  })

  it('renders as a dialog with correct aria attributes', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />, { wrapper })
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-labelledby', 'project-title')
  })

  it('renders the close button', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />, { wrapper })
    expect(screen.getByRole('button', { name: 'Cerrar modal' })).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />, { wrapper })
    fireEvent.click(screen.getByRole('button', { name: 'Cerrar modal' }))
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when pressing Escape', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />, { wrapper })
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(mockOnClose).toHaveBeenCalled()
  })

  it('sets body overflow to hidden on mount', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />, { wrapper })
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('restores body overflow on unmount', () => {
    const { unmount } = render(<ProjectModal project={mockProject} onClose={mockOnClose} />, { wrapper })
    unmount()
    expect(document.body.style.overflow).toBe('unset')
  })

  it('renders gallery navigation buttons', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />, { wrapper })
    expect(screen.getByRole('button', { name: 'Imagen anterior' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Imagen siguiente' })).toBeInTheDocument()
  })

  it('navigates to next image on right arrow key', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />, { wrapper })
    fireEvent.keyDown(document, { key: 'ArrowRight' })
    expect(screen.getByText('2 / 6')).toBeInTheDocument()
  })

  it('navigates to previous image on left arrow key', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />, { wrapper })
    fireEvent.keyDown(document, { key: 'ArrowRight' })
    fireEvent.keyDown(document, { key: 'ArrowLeft' })
    expect(screen.getByText('1 / 6')).toBeInTheDocument()
  })

  it('renders project title', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />, { wrapper })
    expect(screen.getByText('Game Zone')).toBeInTheDocument()
  })

  it('renders project description', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />, { wrapper })
    expect(screen.getByText('Tienda online de videojuegos')).toBeInTheDocument()
  })

  it('renders technology badges', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />, { wrapper })
    expect(screen.getByText('HTML')).toBeInTheDocument()
    expect(screen.getByText('CSS')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
  })

  it('renders live demo and code links', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />, { wrapper })
    expect(screen.getByRole('link', { name: /código/i })).toHaveAttribute('href', 'https://github.com')
    expect(screen.getByRole('link', { name: /demo/i })).toHaveAttribute('href', 'https://example.com')
  })

  it('does not render gallery navigation for single image', () => {
    const singleImageProject = { ...mockProject, galleryImages: ['/img1.webp'] }
    render(<ProjectModal project={singleImageProject} onClose={mockOnClose} />, { wrapper })
    expect(screen.queryByRole('button', { name: 'Imagen anterior' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Imagen siguiente' })).not.toBeInTheDocument()
  })

  it('stops propagation when clicking inside modal', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />, { wrapper })
    const modalContent = screen.getByRole('dialog').firstChild
    fireEvent.click(modalContent)
    expect(mockOnClose).not.toHaveBeenCalled()
  })

  it('calls onClose when clicking backdrop', () => {
    render(<ProjectModal project={mockProject} onClose={mockOnClose} />, { wrapper })
    const backdrop = screen.getByRole('dialog')
    fireEvent.click(backdrop)
    expect(mockOnClose).toHaveBeenCalled()
  })
})
