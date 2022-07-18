import { ComponentMeta } from '@storybook/react'
import { Error } from './Error'

export default {
  title: 'Error',
  component: Error,
} as ComponentMeta<typeof Error>

export const Primary = () => <Error message='The message is undefined!' />
