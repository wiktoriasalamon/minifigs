import { render } from '@testing-library/react'
import { Root } from './Root'

test("renders component with an 'App' className", async () => {
  const { container } = await render(<Root />)
  const appContainer = container.getElementsByClassName('App')
  await expect(appContainer).toBeDefined()
})
