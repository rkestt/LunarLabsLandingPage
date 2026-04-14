import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('renders the section title', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('renders the Interface badge', () => {
    render(<ContactForm />)
    expect(screen.getByText(/Interface/i)).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/Identifier Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Client Category/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Service Protocol/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Contact Channel/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Contact Detail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Project Specifications/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /Invia Protocollo/i })).toBeInTheDocument()
  })

  it('shows validation errors for empty form submission', async () => {
    render(<ContactForm />)
    const user = userEvent.setup()
    
    const submitButton = screen.getByRole('button', { name: /Invia Protocollo/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/Il nome deve avere almeno 2 caratteri/i)).toBeInTheDocument()
    })
  })

  it('shows client type validation error', async () => {
    render(<ContactForm />)
    const user = userEvent.setup()
    
    const nameInput = screen.getByLabelText(/Identifier Name/i)
    await user.type(nameInput, 'Test User')
    
    const submitButton = screen.getByRole('button', { name: /Invia Protocollo/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/Seleziona il tipo di cliente/i)).toBeInTheDocument()
    })
  })
})
