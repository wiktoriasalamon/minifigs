import React from 'react'
import { render } from '@testing-library/react'
import { Root } from './Root'

test('renders learn react link', () => {
  const { container } = render(<Root />)
  const appContainer = container.getElementsByClassName('App')
  expect(appContainer).toBeDefined()
})
