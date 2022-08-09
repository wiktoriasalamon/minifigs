import { ComponentMeta } from '@storybook/react'
import { SingleValue } from 'react-select'
import { Select } from './Select'
import { Option } from './types'

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

const handleChange = (option: SingleValue<Option>) => alert(option)

export const Primary = () => (
  <Select id='number' options={options} label='Select number' onChange={handleChange} />
)
