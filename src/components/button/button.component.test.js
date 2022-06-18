import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from './button.component'
import { BUTTON_SIZES, BUTTON_VARIANTS } from 'constants/button.constants'

describe('button tests', () => {
  it('button must be render', () => {
    render(<Button />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('button must be render with text', () => {
    render(<Button>Hello</Button>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('button must be render with small', () => {
    render(<Button size={BUTTON_SIZES.SMALL} />)
    expect(screen.getByRole('button')).toHaveClass('button__small')
  })

  it('button must be render with outlined', () => {
    render(<Button variant={BUTTON_VARIANTS.OUTLINED} />)
    expect(screen.getByRole('button')).toHaveClass('outlined')
  })

  it('button must be render with small and outlined', () => {
    render(
      <Button size={BUTTON_SIZES.SMALL} variant={BUTTON_VARIANTS.OUTLINED} />
    )
    expect(screen.getByRole('button')).toHaveClass('button__small outlined')
  })

  it('button must be render with small and outlined and text', () => {
    render(
      <Button size={BUTTON_SIZES.SMALL} variant={BUTTON_VARIANTS.OUTLINED}>
        Hello
      </Button>
    )
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass('button__small outlined')
  })

  it('button must be render with medium and outlined', () => {
    render(
      <Button size={BUTTON_SIZES.MEDIUM} variant={BUTTON_VARIANTS.OUTLINED} />
    )
    expect(screen.getByRole('button')).toHaveClass('button__medium outlined')
  })
})
