import { render, screen, fireEvent } from '@testing-library/react'
import { GalleryThumbnails } from '../GalleryThumbnails'

vi.mock('@hooks/useReducedMotion', () => ({
  default: () => true,
}))

describe('GalleryThumbnails', () => {
  const mockImages = ['/img1.webp', '/img2.webp', '/img3.webp']
  const mockOnThumbnailClick = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all thumbnails', () => {
    render(
      <GalleryThumbnails
        images={mockImages}
        currentIndex={0}
        onThumbnailClick={mockOnThumbnailClick}
        lang="es"
      />
    )
    expect(screen.getByAltText('Thumbnail 1')).toBeInTheDocument()
    expect(screen.getByAltText('Thumbnail 2')).toBeInTheDocument()
    expect(screen.getByAltText('Thumbnail 3')).toBeInTheDocument()
  })

  it('highlights the current thumbnail', () => {
    render(
      <GalleryThumbnails
        images={mockImages}
        currentIndex={1}
        onThumbnailClick={mockOnThumbnailClick}
        lang="es"
      />
    )
    const activeThumb = screen.getByRole('button', { name: 'Ver imagen 2' })
    expect(activeThumb).toHaveClass('border-orange-500')
  })

  it('calls onThumbnailClick with correct index', () => {
    render(
      <GalleryThumbnails
        images={mockImages}
        currentIndex={0}
        onThumbnailClick={mockOnThumbnailClick}
        lang="es"
      />
    )
    fireEvent.click(screen.getByRole('button', { name: 'Ver imagen 2' }))
    expect(mockOnThumbnailClick).toHaveBeenCalledWith(1)
  })

  it('uses English labels when lang is en', () => {
    render(
      <GalleryThumbnails
        images={mockImages}
        currentIndex={0}
        onThumbnailClick={mockOnThumbnailClick}
        lang="en"
      />
    )
    expect(screen.getByRole('button', { name: 'View image 1' })).toBeInTheDocument()
  })
})
