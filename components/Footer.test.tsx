import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getAllByText(/Lunar Labs/i)).toHaveLength(2)
  })

  it('renders the contact email', () => {
    render(<Footer />)
    expect(screen.getByText(/andrea.fiori.ff@gmail.com/i)).toBeInTheDocument()
  })

  it('renders service links', () => {
    render(<Footer />)
    expect(screen.getByText(/Web App/i)).toBeInTheDocument()
    expect(screen.getByText(/Desktop App/i)).toBeInTheDocument()
    expect(screen.getByText(/Landing Pages/i)).toBeInTheDocument()
  })

  it('renders company links', () => {
    render(<Footer />)
    expect(screen.getByText(/Chi Siamo/i)).toBeInTheDocument()
    expect(screen.getByText(/Contatti/i)).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<Footer />)
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument()
    expect(screen.getByText(/Terms of Service/i)).toBeInTheDocument()
  })

  it('renders the copyright year', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear, 'i'))).toBeInTheDocument()
  })

  it('renders the version badge', () => {
    render(<Footer />)
    expect(screen.getByText(/LNR-V2.1/i)).toBeInTheDocument()
  })
})
