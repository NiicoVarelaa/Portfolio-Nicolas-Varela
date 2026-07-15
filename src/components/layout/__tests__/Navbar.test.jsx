import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '../Navbar'
import LanguageContext from '@context/LanguageContext'
import ThemeContext from '@context/ThemeContext'

const wrapper = ({ children }) => (
  <LanguageContext.Provider value={{ lang: 'es', toggleLanguage: vi.fn() }}>
    <ThemeContext.Provider value={{ isDarkMode: false, toggleTheme: vi.fn() }}>
      {children}
    </ThemeContext.Provider>
  </LanguageContext.Provider>
)

vi.mock('@hooks/useTranslation', () => ({
  default: () => ({
    navbar: {
      projects: 'Proyectos',
      skills: 'Skills',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    home: { availableForWork: 'Disponible', greeting: 'Hola', iAm: '', fullStackDeveloper: 'Dev', homeDescription: 'Desc', downloadCV: 'CV' },
    projects: { sectionTitle: 'Proyectos', projectList: [] },
    skills: { sectionTitle: 'Habilidades', technologiesCount: 'tecnologías' },
    about: { sectionTitle: 'Sobre mí', timeline: [] },
    contact: { sectionTitle: 'Contacto', name: 'Nombre', email: 'Email', subject: 'Asunto', message: 'Mensaje', send: 'Enviar', sending: 'Enviando', validations: { nameRequired: 'Req', emailRequired: 'Req', emailInvalid: 'Invalid', subjectRequired: 'Req', messageRequired: 'Req' } },
    floatingBadge: { specialty: 'Esp', frontend: 'Frontend' },
    footer: { copyright: 'Copyright', projects: 'Proyectos', aboutMe: 'Sobre mí' },
  }),
  useLang: () => 'es',
}))

vi.mock('@hooks/useScrollSpy', () => ({
  default: () => ({ activeSection: '', hasShadow: false }),
}))

describe('Navbar', () => {
  it('renders the banner with correct role', () => {
    render(<Navbar />, { wrapper })
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('renders the logo link', () => {
    render(<Navbar />, { wrapper })
    expect(screen.getByRole('link', { name: /Nicolás Varela/i })).toHaveAttribute('href', '#home')
  })

  it('renders navigation links', () => {
    render(<Navbar />, { wrapper })
    expect(screen.getByText('Proyectos')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Sobre mí')).toBeInTheDocument()
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })

  it('renders the main navigation with aria-label', () => {
    render(<Navbar />, { wrapper })
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })

  it('renders the mobile menu toggle button', () => {
    render(<Navbar />, { wrapper })
    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the mobile menu when toggle is clicked', () => {
    render(<Navbar />, { wrapper })
    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(menuButton).toHaveAttribute('aria-label', 'Close menu')
  })

  it('closes the mobile menu when toggle is clicked again', () => {
    render(<Navbar />, { wrapper })
    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    fireEvent.click(menuButton)
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('sets body overflow hidden when mobile menu is open', () => {
    render(<Navbar />, { wrapper })
    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    fireEvent.click(menuButton)
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('restores body overflow when mobile menu is closed', () => {
    render(<Navbar />, { wrapper })
    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    fireEvent.click(menuButton)
    fireEvent.click(menuButton)
    expect(document.body.style.overflow).toBe('')
  })

  it('renders language selection group', () => {
    render(<Navbar />, { wrapper })
    expect(screen.getByRole('group', { name: 'Language selection' })).toBeInTheDocument()
  })

  it('renders dark mode toggles', () => {
    render(<Navbar />, { wrapper })
    const toggles = screen.getAllByRole('button', { name: /dark mode/i })
    expect(toggles.length).toBe(2)
  })
})
