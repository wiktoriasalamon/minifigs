import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} label='Button' />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  disabled: false,
  onClick: () => alert('Test'),
}

export const Secondary = Template.bind({})
Secondary.args = {
  disabled: false,
  onClick: () => alert('Test'),
}
