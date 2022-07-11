import { ComponentStory, ComponentMeta } from '@storybook/react'
import { blue } from '../../../styles/colors'
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} label='Button' />

export const Primary = Template.bind({})
Primary.args = {
  color: blue,
  disabled: false,
  onClick: () => alert('Test'),
}
