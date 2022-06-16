import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from './button.component'

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
    render(<Button isButtonSmall />)
    expect(screen.getByRole('button')).toHaveClass('button__small')
  })

  it('button must be render with outlined', () => {
    render(<Button isOutlined />)
    expect(screen.getByRole('button')).toHaveClass('outlined')
  })

  it('button must be render with small and outlined', () => {
    render(<Button isButtonSmall isOutlined />)
    expect(screen.getByRole('button')).toHaveClass('button__small outlined')
  })

  it('button must be render with small and outlined and text', () => {
    render(
      <Button isButtonSmall isOutlined>
        Hello
      </Button>
    )
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass('button__small outlined')
  })
})
