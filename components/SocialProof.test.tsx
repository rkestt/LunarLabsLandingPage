import { render, screen } from '@testing-library/react'
import SocialProof from './SocialProof'

describe('SocialProof', () => {
  it('renders the section title', () => {
    render(<SocialProof />)
    expect(screen.getByText(/TECH STACK/i)).toBeInTheDocument()
  })

  it('renders the subtitle badge', () => {
    render(<SocialProof />)
    expect(screen.getByText(/Industrial Engineering Core/i)).toBeInTheDocument()
  })

  it('renders all tech stack items', () => {
    render(<SocialProof />)
    expect(screen.getAllByText(/Next.js/i)).toHaveLength(3)
    expect(screen.getAllByText(/React/i)).toHaveLength(3)
    expect(screen.getAllByText(/Node.js/i)).toHaveLength(3)
    expect(screen.getAllByText(/TypeScript/i)).toHaveLength(3)
    expect(screen.getAllByText(/Tailwind CSS/i)).toHaveLength(3)
    expect(screen.getAllByText(/PostgreSQL/i)).toHaveLength(3)
    expect(screen.getAllByText(/Docker/i)).toHaveLength(3)
    expect(screen.getAllByText(/Prisma/i)).toHaveLength(3)
  })

  it('renders all values', () => {
    render(<SocialProof />)
    expect(screen.getAllByText(/No Boilerplate/i)).toHaveLength(3)
    expect(screen.getAllByText(/Performance/i)).toHaveLength(3)
    expect(screen.getAllByText(/SEO Optimized/i)).toHaveLength(3)
    expect(screen.getAllByText(/Trasparenza/i)).toHaveLength(3)
    expect(screen.getAllByText(/Innovazione/i)).toHaveLength(3)
    expect(screen.getAllByText(/Async-First/i)).toHaveLength(3)
    expect(screen.getAllByText(/User Centered/i)).toHaveLength(3)
    expect(screen.getAllByText(/Custom MVP/i)).toHaveLength(3)
  })
})
