import React from 'react';
import InputAnnotation from './InputAnnotation';

export default {
    title: 'Test/InputAnnotation',
    component: InputAnnotation,
    argTypes: {
      value: { control: 'text' },
      error: {control: 'boolean'},
      disabled: { control: 'boolean' },
      style: { control: 'object' },
    },
  };

  const Template = (args) => <InputAnnotation {...args} />;

  export const Default = Template.bind({});
  Default.args = {
  value: 'This is a hint text to help user.',
  disabled: false,
  error: false,
  style: { color: 'black', fontSize: '20px'},
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error:true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
  style: { color: 'light-grey', fontSize: '20px' },
};
