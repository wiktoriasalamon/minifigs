import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonColor } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} label="Button" />

export const Primary = Template.bind({});
Primary.args = {
  color: ButtonColor.Blue,
  disabled: false,
}
