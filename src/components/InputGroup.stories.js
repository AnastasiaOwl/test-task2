import React from 'react';
import InputGroup from './InputGroup';
import { useGlobals } from '@storybook/addons';

export default {
    title: 'Test/InputGroup',
    component: InputGroup,
    argTypes: {
      styleGroup: {control: 'object'},
      labelValue: { control: 'text' },
      inputId: { control: 'text' },
      inputValue: { control: 'text' },
      annotationValue:{ control:'text'},
      disabled: { control: 'boolean' },
      focus: { control: 'boolean' },
      error: {control: 'boolean'},
      errorFocus: {control: 'boolean'},
      style: { control: 'object' },
      placeholder: { control: 'text' },
    },
  };

  const Template = (args) => <InputGroup {...args} />;

  export const Default = Template.bind({});
  Default.args = {
  labelValue: 'Email',
  inputId: 'email-input',
  inputValue: '',
  annotationValue: 'This is a hint text to help user.',
  disabled: false,
  focus: false,
  errorFocus: false,
  error: false,
  styleGroup: { display: 'flex', flexDirection: 'column', gap: '8px'},
  placeholder: 'Input...',
};

 export const Focus = Template.bind({});
  Focus.args={
    ...Default.args,
    focus: true
  }

  export const Error = Template.bind({});
  Error.args={
    ...Default.args,
    error: true,
  }

  export const ErrorFocus = Template.bind({});
  ErrorFocus.args={
    ...Default.args,
    errorFocus: true,
  }

  export const Disabled = Template.bind({});
  Disabled.args={
    ...Default.args,
    disabled: true,
  }

  export const Playground = Template.bind({});
  Playground.args = {
  theme: 'light', 
  labelValue: 'Email',
  inputId: 'input-id',
  annotationValue: 'This is a hint text to help user.',
  inputValue: '',
  disabled: false,
  focus: false,
  errorFocus: false,
  error: false,
  styleGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
  placeholder: 'Input...',
};