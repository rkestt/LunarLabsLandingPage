import { render, screen } from '@testing-library/react'
import About from './About'

describe('About', () => {
  it('renders the section title', () => {
    render(<About />)
    expect(screen.getByText(/IL METODO/i)).toBeInTheDocument()
    expect(screen.getAllByText(/LUNAR/i)).toHaveLength(2)
  })

  it('renders the identity badge', () => {
    render(<About />)
    expect(screen.getByText(/Identity/i)).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<About />)
    expect(screen.getByText(/Lunar Labs è un team/i)).toBeInTheDocument()
  })

  it('renders the stats', () => {
    render(<About />)
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('CORE TRANSPARENCY')).toBeInTheDocument()
    expect(screen.getByText('STABLE')).toBeInTheDocument()
    expect(screen.getByText('TECH STACK')).toBeInTheDocument()
    expect(screen.getByText('PURE')).toBeInTheDocument()
    expect(screen.getByText('EXECUTION')).toBeInTheDocument()
  })

  it('renders the features', () => {
    render(<About />)
    expect(screen.getByText(/Sviluppo su Misura/i)).toBeInTheDocument()
    expect(screen.getByText(/Comunicazione Async/i)).toBeInTheDocument()
    expect(screen.getByText(/Nessun Boilerplate/i)).toBeInTheDocument()
    expect(screen.getByText(/Supporto Continuo/i)).toBeInTheDocument()
  })
})
