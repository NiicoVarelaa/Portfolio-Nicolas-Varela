import { renderHook } from '@testing-library/react'
import useTranslation, { useLang } from '../useTranslation'
import LanguageContext from '@context/LanguageContext'
import { vi, describe, expect, it } from 'vitest'

const createWrapper = (lang) => {
  const wrapper = ({ children }) => (
    <LanguageContext.Provider value={{ lang, toggleLanguage: vi.fn() }}>
      {children}
    </LanguageContext.Provider>
  )
  return wrapper
}

describe('useTranslation', () => {
  it('returns spanish translations when lang is es', () => {
    const { result } = renderHook(() => useTranslation(), {
      wrapper: createWrapper('es'),
    })
    expect(result.current.navbar).toBeDefined()
    expect(result.current.projects).toBeDefined()
    expect(result.current.contact).toBeDefined()
  })

  it('returns english translations when lang is en', () => {
    const { result } = renderHook(() => useTranslation(), {
      wrapper: createWrapper('en'),
    })
    expect(result.current.navbar).toBeDefined()
    expect(result.current.projects).toBeDefined()
    expect(result.current.contact).toBeDefined()
  })

  it('returns different translations for different languages', () => {
    const { result: esResult } = renderHook(() => useTranslation(), {
      wrapper: createWrapper('es'),
    })
    const { result: enResult } = renderHook(() => useTranslation(), {
      wrapper: createWrapper('en'),
    })
    expect(esResult.current.navbar.projects).not.toBe(enResult.current.navbar.projects)
  })
})

describe('useLang', () => {
  it('returns current language code', () => {
    const { result } = renderHook(() => useLang(), {
      wrapper: createWrapper('en'),
    })
    expect(result.current).toBe('en')
  })

  it('returns es when lang is es', () => {
    const { result } = renderHook(() => useLang(), {
      wrapper: createWrapper('es'),
    })
    expect(result.current).toBe('es')
  })
})
