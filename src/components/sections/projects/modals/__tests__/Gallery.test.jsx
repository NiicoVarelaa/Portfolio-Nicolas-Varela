import { render, screen, fireEvent } from '@testing-library/react'
import { Gallery } from '../Gallery'

vi.mock('@hooks/useReducedMotion', () => ({
  default: () => true,
}))

describe('Gallery', () => {
  const mockImages = ['/img1.webp', '/img2.webp', '/img3.webp']
  const mockOnPrev = vi.fn()
  const mockOnNext = vi.fn()
  const mockOnImageLoad = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the current image', () => {
    render(
      <Gallery
        images={mockImages}
        currentIndex={0}
        direction={0}
        isImageLoading={false}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
        onImageLoad={mockOnImageLoad}
        lang="es"
      />
    )
    const img = screen.getByAltText('Screenshot 1')
    expect(img).toHaveAttribute('src', '/img1.webp')
  })

  it('renders navigation buttons when multiple images', () => {
    render(
      <Gallery
        images={mockImages}
        currentIndex={0}
        direction={0}
        isImageLoading={false}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
        onImageLoad={mockOnImageLoad}
        lang="es"
      />
    )
    expect(screen.getByRole('button', { name: 'Imagen anterior' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Imagen siguiente' })).toBeInTheDocument()
  })

  it('does not render navigation buttons for single image', () => {
    render(
      <Gallery
        images={['/img1.webp']}
        currentIndex={0}
        direction={0}
        isImageLoading={false}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
        onImageLoad={mockOnImageLoad}
        lang="es"
      />
    )
    expect(screen.queryByRole('button', { name: 'Imagen anterior' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Imagen siguiente' })).not.toBeInTheDocument()
  })

  it('calls onNext when next button is clicked', () => {
    render(
      <Gallery
        images={mockImages}
        currentIndex={0}
        direction={0}
        isImageLoading={false}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
        onImageLoad={mockOnImageLoad}
        lang="es"
      />
    )
    fireEvent.click(screen.getByRole('button', { name: 'Imagen siguiente' }))
    expect(mockOnNext).toHaveBeenCalledTimes(1)
  })

  it('calls onPrev when previous button is clicked', () => {
    render(
      <Gallery
        images={mockImages}
        currentIndex={1}
        direction={0}
        isImageLoading={false}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
        onImageLoad={mockOnImageLoad}
        lang="es"
      />
    )
    fireEvent.click(screen.getByRole('button', { name: 'Imagen anterior' }))
    expect(mockOnPrev).toHaveBeenCalledTimes(1)
  })

  it('shows image counter', () => {
    render(
      <Gallery
        images={mockImages}
        currentIndex={1}
        direction={0}
        isImageLoading={false}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
        onImageLoad={mockOnImageLoad}
        lang="es"
      />
    )
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
  })

  it('shows loading spinner when image is loading', () => {
    render(
      <Gallery
        images={mockImages}
        currentIndex={0}
        direction={0}
        isImageLoading={true}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
        onImageLoad={mockOnImageLoad}
        lang="es"
      />
    )
    expect(screen.getByRole('img', { hidden: true }).closest('div').querySelector('.animate-spin')).toBeInTheDocument()
  })

  it('uses English labels when lang is en', () => {
    render(
      <Gallery
        images={mockImages}
        currentIndex={0}
        direction={0}
        isImageLoading={false}
        onPrev={mockOnPrev}
        onNext={mockOnNext}
        onImageLoad={mockOnImageLoad}
        lang="en"
      />
    )
    expect(screen.getByRole('button', { name: 'Previous image' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next image' })).toBeInTheDocument()
  })
})
