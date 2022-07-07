import { ComponentMeta } from '@storybook/react'
import Label from './Label'

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>

export const Light = () => <Label text="Phone number:" light />;
export const Dark = () => <Label text="Phone number:" />;