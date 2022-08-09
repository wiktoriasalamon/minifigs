import { ComponentMeta } from '@storybook/react'
import { ConditionalError } from './ConditionalError'

export default {
  title: 'ConditionalError',
  component: ConditionalError,
} as ComponentMeta<typeof ConditionalError>

export const Primary = () => <ConditionalError message='The message is undefined!' />

export const Empty = () => <ConditionalError />
