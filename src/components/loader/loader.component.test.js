import React from 'react'
import { render } from '@testing-library/react'

import { Loader } from './loader.component'

describe('Loader component', () => {
  it('should render correctly', () => {
    const { container } = render(<Loader />)
    expect(container).toMatchSnapshot()
  })

  it('should render with custom class', () => {
    const { container } = render(<Loader className="custom-class" />)
    expect(container).toMatchSnapshot()
  })
})
