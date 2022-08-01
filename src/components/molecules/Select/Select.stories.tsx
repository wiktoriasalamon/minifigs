import { ComponentMeta } from '@storybook/react'
import { Select } from './Select'

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>

const options = [
  {
    value: 1,
    label: 'One',
  },
  {
    value: 2,
    label: 'Two',
  },
  {
    value: 3,
    label: 'Three',
  },
]

export const Primary = () => <Select id='number' options={options} label='Select number' />
