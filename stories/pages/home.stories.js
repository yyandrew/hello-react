import React from 'react';
import { storiesOf } from '@storybook/react';

import App from '../../src/App';

storiesOf('Home page', module)
  .add('person information', () => (
    <App name="Andrew" />
  ));
