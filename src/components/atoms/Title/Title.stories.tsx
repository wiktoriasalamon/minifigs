import { ComponentMeta } from '@storybook/react'
import { purple } from 'styles/colors'
import Title from './Title'

export default {
  title: 'Title',
  component: Title,
} as ComponentMeta<typeof Title>

export const Light = () => (
  <div style={{ backgroundColor: purple, padding: '20px' }}>
    <Title light>Shipping details</Title>
  </div>
)

export const Dark = () => <Title>Your minifig</Title>
