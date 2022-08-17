import { ComponentMeta } from '@storybook/react'
import { Figure } from './Figure'
import logo from '../../../../public/logo192.png'

export default {
  title: 'Figure',
  component: Figure,
} as ComponentMeta<typeof Figure>

export const Primary = () => <Figure name='Figure example' imageUrl={logo} />
