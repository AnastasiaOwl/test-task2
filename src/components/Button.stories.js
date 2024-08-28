import React from 'react';
import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    style: { control: 'object' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  onClick: () => alert('Button clicked!'),
  disabled: false,
  style: { backgroundColor: 'blue', color: 'white' },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  onClick: () => alert('Button clicked!'),
  disabled: true,
  style: { backgroundColor: 'gray', color: 'white' },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  label: 'Custom Style Button',
  onClick: () => alert('Button clicked!!'),
  disabled: false,
  style: { backgroundColor: 'green', color: 'yellow', padding: '10px' },
};

