import React from 'react';
import InputLabel from './InputLabel';

export default {
    title: 'Test/InputLabel',
    component: InputLabel,
    argTypes: {
      htmlFor:{ control: 'text'},
      value: { control: 'text' },
      style: { control: 'object' },
    },
  };

  const Template = (args) => <InputLabel {...args} />;

  export const Default = Template.bind({});
  Default.args = {
  value: 'Label',
  style: {color: 'black'},
};

 export const Disabled = Template.bind({});
 Disabled.args = {
    value: 'Label',
    style: {color: 'grey'},
 }