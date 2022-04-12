import React from 'react';
import ReactDOM from 'react-dom';
import { ClockApp } from './ClockApp';
import './styles/styles.scss';
import { register as registerServiceWorker } from './serviceWorkerRegistration';

ReactDOM.render(
  <ClockApp />,
  document.getElementById('root')
);

registerServiceWorker();