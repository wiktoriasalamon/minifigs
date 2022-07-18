import { ComponentMeta } from '@storybook/react'
import { Label } from './Label'
import {Background} from '../Background';

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>


export const Light = () => (
  <Background dark>
    <Label light>Phone number:</Label>
  </Background>
)

export const Dark = () => (
    <Background>
        <Label>Phone number:</Label>
    </Background>
)
