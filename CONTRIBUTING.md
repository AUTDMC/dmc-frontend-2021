Guidelines
1. All views (components/pages that are shown by router) go inside src/views
2. All components that are used by more than one view or component, along with all HOCs, go inside src/shared-components

If a shared component has some components itself, they go inside its components directory, as in src/shared-components/Foo/components/Bar


3. React components must be defined inside jsx files. If a component only has a jsx file, it doesn't need a folder and should only have a file with the component's name as the file name. e.g. src/shared-components/Foo.jsx
4. Every view or shared-component or any components inside src/views/Foo/components that aside from the jsx file, has other files, should have a directory with the component's name, and:

an index.jsx file containing its main component
probably a style.scss file containing its styles
probably a requests.js file containing its requests functions
probably a utils.js file containing its utility functions
probably a constants.js file containing its constant variables
(Only for views and shared-components) probably a /components directory, containing:


/Baz or Baz.jsx

...


probably a /store directory containing its local redux states. which contains:

a reducer.js

an action-types.js

an actions.js

NOTE: data goes inside these local reducers if and only if: their writer (dispatcher of their actions) is related to and placed inside the component itself, or the parent component or view. Otherwise, they should be moved to a shared reducer (explained later). Using a local reducer's data by different parts of the application is acceptable.



5. All the global functionalities (services) go inside src/services like src/services/http...
6. All utility functions which are used by more that one view or shared-component go inside src/utils or else, they should be placed inside the component's folder
7. Global configs and shared constants go inside src/configs like src/configs/constants.js, src/configs/routes.js ...
8. Main configs for Redux store goes inside src/store, which also contains:

General middlewares go inside src/store/middlewares

Each of the shared reducers (i.e. reducers which hold data that do not belong to a specific view or component) , will have a directory in here (like src/store/user). Which contains its own action-types.js, actions.js, and reducer.js files.

9. Views that have a complex structure and nested views, must follow the file structure of the whole app in this way:

Basic files like index.jsx, style.scss, etc. similar to other simple views
A components folder for the components that are shared between its nested views, or used inside its root component
A configs folder that contains files like:


routes.js : definitions for its nested routes

route-paths.js : constants for route paths of its nested routes

constants.js : for constants that are used inside its scope


A views folder, containing its nested views which is structured like src/views

If there are more levels of nested routes here, they should just be placed besides each other in this folder. No more nesting is allowed



10. Some coding style conventions:


Style Files: All the component style (scss) files MUST be named like this (style as the name): style.scss
Their import statements in js/jsx files must be like import './style.scss';, WITH the extension.
Always use ' for @import statements inside scss files.



Naming CSS class name:

Always try to use BEM.
For views that have a considerable amount of sub-components and styles, it's recommended to use a small prefix for their CSS class names. (to avoid conflicts)

Functions:

Always keep functions small and compatible with "Single Responsibility Principle".
Divide big functions into separated smaller functions
Specially in render functions, avoid using many conditions and instead, create a different function for each conditional case
Try to use "early return" as much as possible. meaning instead of this:
// bad
function foo() {
  if (/* condition 1 */) {
    return /* result 1 */;
  } else if (/* condition 2 */) {
    return /* result 2 */;
  } else {
    return /* result 3 */;
  }
  // OR (still bad):
  let foo;

  if (/* condition 1 */) {
    foo = /* result 1 */;
  } else if (/* condition 2 */) {
    foo = /* result 2 */;
  } else {
    foo = /* result 3 */;
  }

  return foo;
}
you should use this:
// good
function foo() {
  if (/* condition 1 */) {
    return /* result 1 */;
  }

  if (/* condition 2 */) {
    return /* result 2 */;
  }

  return /* result 3 */;
}




Binding methods in Classes:

If you need persistent access to this in a class method, always try to use bind instead of arrow-functions.
// bad:
class foo {
  myMethod = () => {
    //...
  }
}
// good:
class foo {
  constructor() {
    this.myMethod = this.myMethod.bind(this);
  }

  myMethod() {
    //...
  }
}




Avoid Conditional Rendering Inside Components:

Always try to avoid conditional renderings based on props in components
Instead, use render props and render functions to handle differences inside shared components
Also, try to avoid inline conditional rendering like using ternary operator or &&, and use separate functions or early return instead



Events and Event-Handlers Naming (e.g. in props):

For events, use on + EventName like: onSubmit, onChangeSelectItem, onClick

For their handler functions (i.e. the component method) use handle + EventName like: handleSubmit, handleChangeSelectItem




Imports and Exports:

Exports:

For components (always), services (as much as possible), reducers, and basically everything that has a singular concept, always use default export which exports a class, function, or an object containing main functionalities:
export default FooComponent;
// or
const http = {
  get,
  post,
  put,
  delete: del,
};

export default http;

For utils, redux actions and action-types, requests, route-paths, and basically everything that has a plural concept (containing multiple entities that may be used independently), use separated exports:
export const foo = 'FOO';

export function fooActionOrUtilOrRequest() {}



Imports:

For the first group (singulars), obviously always: import Foo from '...';

For the second group (plurals),


If you want to use all of the exported entities from the source, or there might be some serious name collisions between current variables and imported ones, use this:
import * as someFunctionality from '...';

If not, named-import each item:
import { Foo } from 'many-foos'






Import Statements Order: Inside js/jsx files, the order of import statements should be like:
import foo from 'SOME_PACKAGE_FROM_NODE_MODULES'; // list of node_modules packages, followed by one empty line

import bar from 'src/...'; // list of project imports with absolute addresses, followed by one empty line

import baz from './local-folder/...'; // list of local imports with relative addresses, followed by one empty line

import './MyComp.style.scss'; // always the last import statement for components.


Imports and exports of component which have unit tests:

Component names inside this project are always equal with their file name. And are always exported via a default export.
They are also always imported like this (the name usually must be the same as file name): import Foo from 'src/shared-components/Foo'

It's also common that a component is wrapped inside one or more HOCs before getting exported. Like:
  // ...
  function Foo(props) {
    // ...
  }
  //...
  export default withBaz(withBar(Foo));

So when writing unit tests for such a component, one needs to also export the component class/function to be free of those HOCs. The export must be like this:
  // component file:
  function Foo(props) {
    // ...
  }
  //...
  export { Foo as FooComponent }; // this is used for unit tests
  export default withFoo(withBar(Foo)); // this is for regular usage

  // and inside the test file:
  import { FooComponent as Foo } from '../Foo';

The reason behind this is: if we export the component class/function directly, because of one of our lint rules, you can't import the default-exported component with the same name anymore.



Order of properties in class components and spacings:

As you should know by now(!), we're using airbnb eslint configs in this project.
The order for class component properties is explained in this link.
You can also check out this link for more technical details (keep the current version of project's eslint-config-airbnb dependency in mind).
So to summarize, the order (and spacing - empty lines) in components should look like this:
import React from 'react'; // imports from node_modules

import Bar from 'src/shared/Bar'; // absolute imports from projects

import Baz from './Baz'; // relative imports

import './Foo.style'; // style import

class Foo extends PureComponent {
  static someStaticVar = '...'; // static properties except "propTypes" and "defaultProps"

  static someStaticMethod() {}

  state = {}; // and other class properties

  constructor() {}

  componentDidUpdate() {} // and other lifecycle methods

  handleSomeEvent() {} // all handler methods starting with "handle"

  get foo() {}

  set foo() {}

  getSomeData() {} // methods starting with "get" or "set"

  otherMethods() {} // utils and ...

  renderSomething() {} // render methods

  render() {} // "render" is always last
}

// or

function Foo(){

}

Foo.propTypes = {};
Foo.defaultProps = {};

const mapStateToProps = () => {}; // configs for "connect" and other HOCs
const mapDispatchToProps = {};

export { Foo as FooComponent }; // export for unit testing
export default Foo;




route-paths and how to name them:

Always put route paths inside a route-paths file in configs folder (the src/configs or each view's configs folder), alongside the routes file.
Export each path separately:
export const PROMOTE = `${rootPaths.MANAGE}/promote`;
export const EDIT = `${rootPaths.MANAGE}/edit`;

Always use SCREAMING_SNAKE_CASE (uppercase with underscores) for their names.
If a view has a considerable amount of sub-routes and sub-pages (the components are actually nested in the main view), move its route and route-path definitions into its own configs folder. (for lazy-loading you MUST do it)
As you can see in src/configs/route-paths.js, the file is sectioned in comments like // root paths:.
The // root paths are the root paths and the // static paths are the static paths!
The other sections are paths that are lexically nested in some of the root paths or other previous sections.

These Items' names should start with their parents' name:
// root paths:
export const CAR = '/car';
...
// CAR paths:
export const CAR_DEALERS = `${CAR}/dealers`;



Don't repeat the names of the parent scope for the separated views' nested route-paths.

For example, in src/configs/route-paths.js we have:
// root paths:
export const MANAGE = '/manage/:token';
and inside src/views/Manage/configs/route-paths.js:
import * as rootPaths from 'src/configs/route-paths';

export const PROMOTE = `${rootPaths.MANAGE}/promote`;
(note that we don't repeat MANAGE at the start of each one)

14. Merge requests:

First of all, make sure you've completely read this document.
In addition to following the document's guidelines (specially the checklist), try to write the commit messages according to these descriptions.
Briefly, the commit messages are based on project's semantic-release configs. The MR commits are usually squashed, but to keep everyone on the same page (and also as a practice), try to follow those rules.
The message is written in this way: type(scope): some description like fix(Browse): remove a minor bug is Foo. You can find the list of types and overall configs in project's release.config.js file.
