import Home from 'src/views/Home';

import * as paths from './route-paths';

const routes = [
  {
    path: paths.HOME,
    exact: true,
    component: Home,
  },
];

export default routes;
