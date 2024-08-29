import React from 'react';
import InputGroup from './InputGroup';

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
  styleGroup: { display: 'flex', flexDirection: 'column', gap: '8px' , width:'200px'},
  style: { backgroundColor: 'white', color: 'dark-grey', borderRadius: '5px', height: '25px'},
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
    style:{backgroundColor: 'white', borderColor: 'red', color: 'dark-grey', borderRadius: '5px', height: '25px'}
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
    style:{ backgroundColor: 'white', color: 'light-grey', borderRadius: '5px', height: '25px' },
  }

  export const Playground = Template.bind({});
  Playground.args = {
  labelValue: 'Email',
  inputId: 'input-id',
  annotationValue: 'This is a hint text to help user.',
  inputValue: '',
  disabled: false,
  focus: false,
  errorFocus: false,
  error: false,
  styleGroup: { display: 'flex', flexDirection: 'column', gap: '8px', width: '200px' },
  style: { 
    backgroundColor: 'white', 
    color: 'dark-grey', 
    borderRadius: '5px', 
    height: '25px' 
  },
  placeholder: 'Input...',
};