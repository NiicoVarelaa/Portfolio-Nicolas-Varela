import { renderHook } from '@testing-library/react'
import useScrollSpy from '../useScrollSpy'

describe('useScrollSpy', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    window.scrollY = 0
    document.getElementById = vi.fn().mockReturnValue(null)
  })

  it('returns empty activeSection and false hasShadow initially', () => {
    const { result } = renderHook(() => useScrollSpy(['home', 'about']))
    expect(result.current.activeSection).toBe('')
    expect(result.current.hasShadow).toBe(false)
  })

  it('sets activeSection based on scroll position', () => {
    const mockElement = { offsetTop: 100 }
    document.getElementById = vi.fn().mockImplementation((id) => {
      if (id === 'about') return mockElement
      return null
    })
    window.scrollY = 150

    const { result } = renderHook(() => useScrollSpy(['home', 'about'], 200))
    expect(result.current.activeSection).toBe('about')
  })

  it('removes scroll listener on unmount', () => {
    const removeEventListener = vi.spyOn(window, 'removeEventListener')
    const { unmount } = renderHook(() => useScrollSpy(['home']))
    unmount()
    expect(removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
