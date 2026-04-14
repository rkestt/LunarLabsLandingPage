import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/COSTRUIAMO CON/i)).toBeInTheDocument()
    expect(screen.getByText(/LUNAR LABS/i)).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Sviluppiamo MVP ad alte prestazioni/i)).toBeInTheDocument()
  })

  it('renders the call-to-action buttons', () => {
    render(<Hero />)
    expect(screen.getByText(/Inizia Progetto/i)).toBeInTheDocument()
    expect(screen.getByText(/I Nostri Servizi/i)).toBeInTheDocument()
  })

  it('renders the stats section', () => {
    render(<Hero />)
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('CUSTOM CODE')).toBeInTheDocument()
    expect(screen.getByText('ASYNC')).toBeInTheDocument()
    expect(screen.getByText('WORKFLOW')).toBeInTheDocument()
    expect(screen.getByText('PERF')).toBeInTheDocument()
    expect(screen.getByText('OPTIMIZED')).toBeInTheDocument()
    expect(screen.getByText('ZERO')).toBeInTheDocument()
    expect(screen.getByText('BOILERPLATE')).toBeInTheDocument()
  })
})
