import { StrictMode } from 'react';
import { render } from 'react-dom';

import App from './views/App/index';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
