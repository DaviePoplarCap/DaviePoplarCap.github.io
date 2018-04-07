'use strict';
import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'


if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}
