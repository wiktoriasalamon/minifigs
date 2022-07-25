import { ComponentMeta } from '@storybook/react'
import { Separator } from './Separator'

export default {
  title: 'Separator',
  component: Separator,
} as ComponentMeta<typeof Separator>

export const Primary = () => <Separator>Separator text</Separator>
