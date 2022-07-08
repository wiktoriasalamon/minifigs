import { ComponentMeta } from '@storybook/react'
import { purple } from 'styles/colors'
import Label from './Label'

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>

export const Light = () => (
  <div style={{ backgroundColor: purple, padding: '20px' }}>
    <Label light>Phone number:</Label>
  </div>
)

export const Dark = () => <Label>Phone number:</Label>