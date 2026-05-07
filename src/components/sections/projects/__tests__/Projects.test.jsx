import { render, screen, fireEvent, act } from '@testing-library/react'
import { vi } from 'vitest'
import Projects from '../Projects'
import LanguageContext from '@context/LanguageContext'
import ThemeContext from '@context/ThemeContext'

const mockT = {
  navbar: { projects: 'Proyectos', skills: 'Skills', about: 'Sobre mí', contact: 'Contacto' },
  home: { availableForWork: 'Disponible', greeting: 'Hola', iAm: '', fullStackDeveloper: 'Dev', homeDescription: 'Desc', downloadCV: 'CV' },
  projects: {
    sectionTitle: 'Proyectos',
    projectList: [
      { title: 'Game Zone', description: 'Tienda online de videojuegos' },
      { title: 'TaskFlow', description: 'Gestión de tareas con drag & drop' },
      { title: 'WeatherPulse', description: 'Dashboard meteorológico' },
    ],
  },
  skills: { sectionTitle: 'Habilidades', technologiesCount: 'tecnologías', alwaysLearning: 'Aprendiendo', currentlyExploring: 'Explorando' },
  about: { sectionTitle: 'Sobre mí', timeline: [] },
  contact: { sectionTitle: 'Contacto', name: 'Nombre', email: 'Email', subject: 'Asunto', message: 'Mensaje', send: 'Enviar', sending: 'Enviando', validations: { nameRequired: 'Req', emailRequired: 'Req', emailInvalid: 'Invalid', subjectRequired: 'Req', messageRequired: 'Req' } },
  floatingBadge: { specialty: 'Esp', frontend: 'Frontend' },
  footer: { copyright: 'Copyright', projects: 'Proyectos', aboutMe: 'Sobre mí', contact: 'Contacto', madeWith: 'Hecho con', andReact: 'y React' },
}

const wrapper = ({ children }) => (
  <LanguageContext.Provider value={{ lang: 'es', toggleLanguage: vi.fn() }}>
    <ThemeContext.Provider value={{ isDarkMode: false, toggleTheme: vi.fn() }}>
      {children}
    </ThemeContext.Provider>
  </LanguageContext.Provider>
)

vi.mock('@hooks/useTranslation', () => ({
  default: () => mockT,
  useLang: () => 'es',
}))

vi.mock('@hooks/useReducedMotion', () => ({
  default: () => true,
}))

vi.mock('@hooks/useScrollSpy', () => ({
  default: () => ({ activeSection: '', hasShadow: false }),
}))

const getProjectCard = () => screen.getByRole('listitem', { name: /Game Zone/i })

describe('Projects', () => {
  it('renders the projects section', () => {
    render(<Projects />, { wrapper })
    expect(screen.getByRole('region')).toHaveAttribute('id', 'proyectos')
  })

  it('renders the section title', () => {
    render(<Projects />, { wrapper })
    expect(screen.getByText('Proyectos')).toBeInTheDocument()
  })

  it('renders project cards from data', () => {
    render(<Projects />, { wrapper })
    expect(screen.getByText('Game Zone')).toBeInTheDocument()
  })

  it('opens modal when clicking a project card', async () => {
    render(<Projects />, { wrapper })
    await act(async () => {
      fireEvent.click(getProjectCard())
    })
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes modal when pressing Escape', async () => {
    render(<Projects />, { wrapper })
    await act(async () => {
      fireEvent.click(getProjectCard())
    })
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await act(async () => {
      fireEvent.keyDown(document, { key: 'Escape' })
    })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes modal when clicking close button', async () => {
    render(<Projects />, { wrapper })
    await act(async () => {
      fireEvent.click(getProjectCard())
    })
    const closeButton = screen.getByRole('button', { name: 'Cerrar modal' })
    await act(async () => {
      fireEvent.click(closeButton)
    })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('sets body overflow to hidden when modal is open', async () => {
    render(<Projects />, { wrapper })
    await act(async () => {
      fireEvent.click(getProjectCard())
    })
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('restores body overflow when modal is closed', async () => {
    render(<Projects />, { wrapper })
    await act(async () => {
      fireEvent.click(getProjectCard())
    })
    const closeButton = screen.getByRole('button', { name: 'Cerrar modal' })
    await act(async () => {
      fireEvent.click(closeButton)
    })
    expect(document.body.style.overflow).toBe('unset')
  })
})
