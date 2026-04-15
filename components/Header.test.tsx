import { render, screen } from '@testing-library/react'
import Header from './Header'
import '@testing-library/jest-dom'

describe('Header', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', { value: 1024 })
    Object.defineProperty(window, 'innerHeight', { value: 768 })
  })

  it('renders logo with correct text', () => {
    render(<Header />)
    expect(screen.getByText('LUNAR')).toBeInTheDocument()
    expect(screen.getByText('LABS')).toBeInTheDocument()
  })

  it('renders navigation links on desktop', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Servizi')).toBeInTheDocument()
    expect(screen.getByText('Contatti')).toBeInTheDocument()
  })

  it('renders CTA button on desktop', () => {
    render(<Header />)
    expect(screen.getByText('Inizia Progetto')).toBeInTheDocument()
  })
})