import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import routes from 'src/configs/routes';

import 'src/assets/styles/reset.scss';
import 'src/assets/styles/rtl.scss';
import 'src/assets/styles/general.scss';

function App() {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  );
}

export default App;
