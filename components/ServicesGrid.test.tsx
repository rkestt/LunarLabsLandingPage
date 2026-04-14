import { render, screen } from '@testing-library/react'
import ServicesGrid from './ServicesGrid'
import ServiceCard from './ServiceCard'
import { Code2, Rocket, Zap } from 'lucide-react'

describe('ServicesGrid', () => {
  it('renders the section title', () => {
    render(<ServicesGrid />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('renders the capabilities badge', () => {
    render(<ServicesGrid />)
    expect(screen.getByText(/Capabilities/i)).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<ServicesGrid />)
    expect(screen.getByText(/standard ingegneristici/i)).toBeInTheDocument()
  })

  it('renders all service titles', () => {
    render(<ServicesGrid />)
    expect(screen.getByText(/Web App/i)).toBeInTheDocument()
    expect(screen.getByText(/Landing Pages/i)).toBeInTheDocument()
    expect(screen.getByText(/Desktop App/i)).toBeInTheDocument()
  })

  it('renders the informational footer', () => {
    render(<ServicesGrid />)
    expect(screen.getByText(/Sistemi complessi richiedono soluzioni su misura/i)).toBeInTheDocument()
  })
})

describe('ServiceCard', () => {
  it('renders the title and description', () => {
    render(
      <ServiceCard
        icon={Code2}
        title="Web App"
        description="Test description"
        value=""
        index={0}
      />
    )
    expect(screen.getByText(/Web App/i)).toBeInTheDocument()
    expect(screen.getByText(/Test description/i)).toBeInTheDocument()
  })

  it('renders the featured badge when isFeatured is true', () => {
    render(
      <ServiceCard
        icon={Code2}
        title="Featured Service"
        description="Test description"
        value=""
        index={0}
        isFeatured={true}
      />
    )
    expect(screen.getByText(/Priority Solution/i)).toBeInTheDocument()
  })

  it('does not render featured badge when isFeatured is false', () => {
    render(
      <ServiceCard
        icon={Code2}
        title="Regular Service"
        description="Test description"
        value=""
        index={0}
        isFeatured={false}
      />
    )
    expect(screen.queryByText(/Priority Solution/i)).not.toBeInTheDocument()
  })
})
