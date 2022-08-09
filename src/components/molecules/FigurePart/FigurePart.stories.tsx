import { ComponentMeta } from '@storybook/react'
import { FigurePart } from './FigurePart'
import logo from '../../../../public/logo192.png'

export default {
  title: 'FigurePart',
  component: FigurePart,
} as ComponentMeta<typeof FigurePart>

export const Primary = () => (
  <FigurePart name="Figure's part example with long name nameeeeee" id='12345' imageUrl={logo} />
)
