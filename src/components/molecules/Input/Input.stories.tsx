import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from './Input'

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} label='Email' placeholder='Please enter you email address' />
)

export const Empty = Template.bind({})

export const Error = Template.bind({})
Error.args = {
  errorMessage:
    'The email address you entered does not match with required format. Please enter your email address using standard format.',
  value: 'example.com',
}
