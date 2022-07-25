import { ComponentMeta } from '@storybook/react'
import logo from '../../../../public/logo192.png'
import { Figure } from './Figure'

export default {
  title: 'Figure',
  component: Figure,
} as ComponentMeta<typeof Figure>

export const Primary = () => <Figure name='Figure example' imageUrl={logo} />
