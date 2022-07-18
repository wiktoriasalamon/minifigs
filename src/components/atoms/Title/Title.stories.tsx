import { ComponentMeta } from '@storybook/react'
import { Title } from './Title'
import {Background} from '../Background';

export default {
  title: 'Title',
  component: Title,
} as ComponentMeta<typeof Title>

export const Light = () => (
  <Background dark>
    <Title light>Shipping details</Title>
  </Background>
)

export const Dark = () => (
    <Background>
        <Title>Your minifig</Title>
    </Background>
)
