import React from 'react';
import InputText from './InputText';

export default {
    title: 'Test/InputText',
    component: InputText,
    argTypes: {
      value: { control: 'text' },
      focus: { control: 'boolean' },
      error: {control: 'boolean'},
      errorFocus: {control: 'boolean'},
      disabled: { control: 'boolean' },
      style: { control: 'object' },
      placeholder: { control: 'text' },
    },
  };

  const Template = (args) => <InputText {...args} />;

  export const Default = Template.bind({});
  Default.args = {
  value: '',
  disabled: false,
  focus: false,
  errorFocus: false,
  error: false,
  style: { backgroundColor: 'white', color: 'dark-grey', borderRadius: '5px', height: '25px'},
  placeholder: 'Input...',
};

export const Focus = Template.bind({});
  Focus.args = {
    ...Default.args,
  focus: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error:true,
};

export const ErrorFocus = Template.bind({});
ErrorFocus.args = {
    ...Default.args,
    errorFocus: true,
}

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
  style: { backgroundColor: 'white', color: 'light-grey', borderRadius: '5px', height: '25px' },
};
