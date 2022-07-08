import { ComponentMeta } from '@storybook/react'
import Paragraph from './Paragraph'

export default {
  title: 'Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>

export const Primary = () => (
  <Paragraph>This en example text! It doesn&apos;t matter what it says.</Paragraph>
)
