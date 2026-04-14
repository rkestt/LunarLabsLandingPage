import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'

global.fetch = jest.fn()

describe('ContactForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

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

  it('shows success message after form submission', async () => {
    render(<ContactForm />)
    const user = userEvent.setup()
    
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    
    await user.type(screen.getByLabelText(/Identifier Name/i), 'Test User')
    await user.selectOptions(screen.getByLabelText(/Client Category/i), 'pmi')
    await user.selectOptions(screen.getByLabelText(/Service Protocol/i), 'webapp')
    await user.selectOptions(screen.getByLabelText(/Contact Channel/i), 'email')
    await user.type(screen.getByLabelText(/Contact Detail/i), 'test@email.com')
    await user.type(screen.getByLabelText(/Project Specifications/i), 'Test project description')
    
    await user.click(screen.getByRole('button', { name: /Invia Protocollo/i }))
    
    await waitFor(() => {
      expect(screen.getByText(/SISTEMA SINCRONIZZATO/i)).toBeInTheDocument()
    })
  })

  it('shows success message after form submission', async () => {
    render(<ContactForm />)
    const user = userEvent.setup()
    
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    
    await user.type(screen.getByLabelText(/Identifier Name/i), 'Test User')
    await user.selectOptions(screen.getByLabelText(/Client Category/i), 'pmi')
    await user.selectOptions(screen.getByLabelText(/Service Protocol/i), 'webapp')
    await user.selectOptions(screen.getByLabelText(/Contact Channel/i), 'email')
    await user.type(screen.getByLabelText(/Contact Detail/i), 'test@email.com')
    await user.type(screen.getByLabelText(/Project Specifications/i), 'Test project description')
    
    await user.click(screen.getByRole('button', { name: /Invia Protocollo/i }))
    
    await waitFor(() => {
      expect(screen.getByText(/SISTEMA SINCRONIZZATO/i)).toBeInTheDocument()
    })
  })

  it('shows service type validation error', async () => {
    render(<ContactForm />)
    const user = userEvent.setup()
    
    await user.type(screen.getByLabelText(/Identifier Name/i), 'Test User')
    await user.selectOptions(screen.getByLabelText(/Client Category/i), 'pmi')
    
    await user.click(screen.getByRole('button', { name: /Invia Protocollo/i }))
    
    await waitFor(() => {
      expect(screen.getByText(/Seleziona il tipo di servizio/i)).toBeInTheDocument()
    })
  })

  it('shows contact type validation error', async () => {
    render(<ContactForm />)
    const user = userEvent.setup()
    
    await user.type(screen.getByLabelText(/Identifier Name/i), 'Test User')
    await user.selectOptions(screen.getByLabelText(/Client Category/i), 'pmi')
    await user.selectOptions(screen.getByLabelText(/Service Protocol/i), 'webapp')
    
    await user.click(screen.getByRole('button', { name: /Invia Protocollo/i }))
    
    await waitFor(() => {
      expect(screen.getByText(/Seleziona il metodo di contatto/i)).toBeInTheDocument()
    })
  })
})
