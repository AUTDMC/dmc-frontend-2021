import Home from 'src/views/Home';
import Kit from 'src/views/Kit';

import * as paths from './route-paths';

const routes = [
  {
    path: paths.HOME,
    exact: true,
    component: Home,
  },
  {
    path: paths.KIT,
    exact: true,
    component: Kit,
  },
];

export default routes;
