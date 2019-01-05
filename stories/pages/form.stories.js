import React from 'react';
import { storiesOf } from '@storybook/react';

import FormComponent from '../../src/form/FormComponent';

storiesOf('Form page', module)
  .add('form component', () => (
    <FormComponent text='andrew' onFormSubmit={(e) => e.preventDefault()} />
  ));
