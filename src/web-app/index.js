import React from 'react';
import { storiesOf } from '@storybook/react';
import ApiDoc from './components/ApiDoc';

storiesOf('API docs for:', module)
  .add('test', () => (
    <ApiDoc />
  ));
