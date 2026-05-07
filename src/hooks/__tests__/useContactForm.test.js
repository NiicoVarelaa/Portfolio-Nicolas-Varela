import { renderHook } from '@testing-library/react'
import { useContactForm } from '../useContactForm'

const mockT = {
  validations: {
    nameRequired: 'El nombre es requerido',
    emailRequired: 'El email es requerido',
    emailInvalid: 'Email inválido',
    subjectRequired: 'El asunto es requerido',
    messageRequired: 'El mensaje es requerido',
    nameTooLong: 'Nombre demasiado largo',
    subjectTooLong: 'Asunto demasiado largo',
    messageTooLong: 'Mensaje demasiado largo',
    captchaRequired: 'Completá la verificación de seguridad',
  },
  sendingText: 'Enviando...',
  successText: 'Mensaje enviado',
  errorText: 'Error al enviar',
  errorGeneric: 'Ocurrió un problema',
}

const mockToast = vi.hoisted(() => ({
  error: vi.fn(),
  success: vi.fn(),
  promise: vi.fn((promise, options) => {
    promise
      .then(options.success)
      .catch(options.error);
    return promise;
  }),
}))

vi.mock('sonner', () => ({
  toast: mockToast,
}))

describe('useContactForm', () => {
  const mockReset = vi.fn()
  const mockToken = 'test-turnstile-token'

  beforeEach(() => {
    vi.clearAllMocks()
    mockReset.mockClear()
    global.fetch = vi.fn()
    import.meta.env.VITE_API_URL = 'https://test-worker.workers.dev'
  })

  it('shows error toast when name is empty', async () => {
    const onSubmit = renderHook(() => useContactForm(mockReset, mockT)).result.current
    await onSubmit({ name: '', email: 'test@test.com', subject: 'Test', message: 'Hello' }, mockToken)
    expect(mockToast.error).toHaveBeenCalledWith('El nombre es requerido')
  })

  it('shows error toast when email is invalid', async () => {
    const onSubmit = renderHook(() => useContactForm(mockReset, mockT)).result.current
    await onSubmit({ name: 'John', email: 'invalid', subject: 'Test', message: 'Hello' }, mockToken)
    expect(mockToast.error).toHaveBeenCalledWith('Email inválido')
  })

  it('shows error toast when subject is empty', async () => {
    const onSubmit = renderHook(() => useContactForm(mockReset, mockT)).result.current
    await onSubmit({ name: 'John', email: 'test@test.com', subject: '', message: 'Hello' }, mockToken)
    expect(mockToast.error).toHaveBeenCalledWith('El asunto es requerido')
  })

  it('shows error toast when message is empty', async () => {
    const onSubmit = renderHook(() => useContactForm(mockReset, mockT)).result.current
    await onSubmit({ name: 'John', email: 'test@test.com', subject: 'Test', message: '' }, mockToken)
    expect(mockToast.error).toHaveBeenCalledWith('El mensaje es requerido')
  })

  it('shows error toast when captcha token is missing', async () => {
    const onSubmit = renderHook(() => useContactForm(mockReset, mockT)).result.current
    await onSubmit({ name: 'John', email: 'test@test.com', subject: 'Test', message: 'Hello' }, null)
    expect(mockToast.error).toHaveBeenCalledWith('Completá la verificación de seguridad')
  })

  it('uses toast.promise for successful submission', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      })
    )
    const onSubmit = renderHook(() => useContactForm(mockReset, mockT)).result.current
    await onSubmit({ name: 'John', email: 'test@test.com', subject: 'Test', message: 'Hello' }, mockToken)
    expect(mockToast.promise).toHaveBeenCalled()
    const promiseCall = mockToast.promise.mock.calls[0]
    expect(promiseCall[1].loading).toBe('Enviando...')
  })

  it('resets form on successful submission via promise success callback', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      })
    )
    const onSubmit = renderHook(() => useContactForm(mockReset, mockT)).result.current
    await onSubmit({ name: 'John', email: 'test@test.com', subject: 'Test', message: 'Hello' }, mockToken)
    const promiseCall = mockToast.promise.mock.calls[0]
    const successResult = promiseCall[1].success()
    expect(successResult).toBe('Mensaje enviado')
    expect(mockReset).toHaveBeenCalled()
  })

  it('shows error message on API failure via promise error callback', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: false, message: 'Error' }),
      })
    )
    const onSubmit = renderHook(() => useContactForm(mockReset, mockT)).result.current
    await onSubmit({ name: 'John', email: 'test@test.com', subject: 'Test', message: 'Hello' }, mockToken)
    const promiseCall = mockToast.promise.mock.calls[0]
    const errorResult = promiseCall[1].error(new Error('Error'))
    expect(errorResult).toBe('Error al enviar')
  })

  it('shows generic error on network error via promise error callback', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('Network error')))
    const onSubmit = renderHook(() => useContactForm(mockReset, mockT)).result.current
    await onSubmit({ name: 'John', email: 'test@test.com', subject: 'Test', message: 'Hello' }, mockToken)
    const promiseCall = mockToast.promise.mock.calls[0]
    const errorResult = promiseCall[1].error(new Error('Network error'))
    expect(errorResult).toBe('Ocurrió un problema')
  })

  it('sends correct payload to Worker API', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      })
    )
    const onSubmit = renderHook(() => useContactForm(mockReset, mockT)).result.current
    await onSubmit({ name: 'John', email: 'TEST@TEST.COM', subject: 'Test', message: 'Hello' }, mockToken)
    expect(global.fetch).toHaveBeenCalledWith(
      'https://test-worker.workers.dev',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
    )
    const callArgs = global.fetch.mock.calls[0]
    const body = JSON.parse(callArgs[1].body)
    expect(body['cf-turnstile-response']).toBe(mockToken)
    expect(body.name).toBe('John')
    expect(body.email).toBe('test@test.com')
    expect(body.subject).toBe('Test')
    expect(body.message).toBe('Hello')
  })
})
